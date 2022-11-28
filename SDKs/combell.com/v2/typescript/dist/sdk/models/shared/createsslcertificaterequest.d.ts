import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalValidationAttribute } from "./additionalvalidationattribute";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
export declare class CreateSslCertificateRequest extends SpeakeasyBase {
    additionalValidationAttributes?: AdditionalValidationAttribute[];
    certificateType?: SslCertificateTypeEnum;
    csr?: string;
    validationLevel?: SslCertificateValidationLevelEnum;
}
