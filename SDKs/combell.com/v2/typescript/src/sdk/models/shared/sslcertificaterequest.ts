import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";



export class SslCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_type" })
  certificateType?: SslCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=common_name" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=order_code" })
  orderCode?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: SslCertificateVendorEnum;
}
