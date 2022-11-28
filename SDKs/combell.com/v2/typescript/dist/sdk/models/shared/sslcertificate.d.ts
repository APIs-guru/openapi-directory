import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
export declare class SslCertificate extends SpeakeasyBase {
    commonName?: string;
    expiresAfter?: Date;
    sha1Fingerprint?: string;
    type?: SslCertificateTypeEnum;
    validationLevel?: SslCertificateValidationLevelEnum;
}
