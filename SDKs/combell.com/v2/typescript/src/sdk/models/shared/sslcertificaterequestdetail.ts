import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslSubjectAltName } from "./sslsubjectaltname";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateRequestValidation } from "./sslcertificaterequestvalidation";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";



export class SslCertificateRequestDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_type" })
  certificateType?: SslCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=common_name" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=order_code" })
  orderCode?: string;

  @SpeakeasyMetadata({ data: "json, name=subject_alt_names", elemType: SslSubjectAltName })
  subjectAltNames?: SslSubjectAltName[];

  @SpeakeasyMetadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=validations", elemType: SslCertificateRequestValidation })
  validations?: SslCertificateRequestValidation[];

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: SslCertificateVendorEnum;
}
