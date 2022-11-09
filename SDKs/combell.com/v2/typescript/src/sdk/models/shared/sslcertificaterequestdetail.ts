import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslSubjectAltName } from "./sslsubjectaltname";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateRequestValidation } from "./sslcertificaterequestvalidation";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";


export class SslCertificateRequestDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_type" })
  certificateType?: SslCertificateTypeEnum;

  @Metadata({ data: "json, name=common_name" })
  commonName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=order_code" })
  orderCode?: string;

  @Metadata({ data: "json, name=subject_alt_names", elemType: shared.SslSubjectAltName })
  subjectAltNames?: SslSubjectAltName[];

  @Metadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;

  @Metadata({ data: "json, name=validations", elemType: shared.SslCertificateRequestValidation })
  validations?: SslCertificateRequestValidation[];

  @Metadata({ data: "json, name=vendor" })
  vendor?: SslCertificateVendorEnum;
}
