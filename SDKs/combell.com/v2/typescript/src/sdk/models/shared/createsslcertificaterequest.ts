import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalValidationAttribute } from "./additionalvalidationattribute";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";


export class CreateSslCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_validation_attributes", elemType: shared.AdditionalValidationAttribute })
  additionalValidationAttributes?: AdditionalValidationAttribute[];

  @Metadata({ data: "json, name=certificate_type" })
  certificateType?: SslCertificateTypeEnum;

  @Metadata({ data: "json, name=csr" })
  csr?: string;

  @Metadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;
}
