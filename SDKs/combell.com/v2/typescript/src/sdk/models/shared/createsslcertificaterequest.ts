import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalValidationAttribute } from "./additionalvalidationattribute";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";



export class CreateSslCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_validation_attributes", elemType: AdditionalValidationAttribute })
  additionalValidationAttributes?: AdditionalValidationAttribute[];

  @SpeakeasyMetadata({ data: "json, name=certificate_type" })
  certificateType?: SslCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=csr" })
  csr?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;
}
