import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";


export class SslCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_type" })
  certificateType?: SslCertificateTypeEnum;

  @Metadata({ data: "json, name=common_name" })
  commonName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=order_code" })
  orderCode?: string;

  @Metadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;

  @Metadata({ data: "json, name=vendor" })
  vendor?: SslCertificateVendorEnum;
}
