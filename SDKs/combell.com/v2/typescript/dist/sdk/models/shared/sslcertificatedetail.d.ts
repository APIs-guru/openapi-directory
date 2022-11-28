import { SpeakeasyBase } from "../../../internal/utils";
import { SslSubjectAltName } from "./sslsubjectaltname";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
export declare class SslCertificateDetail extends SpeakeasyBase {
    commonName?: string;
    expiresAfter?: Date;
    sha1Fingerprint?: string;
    subjectAltNames?: SslSubjectAltName[];
    type?: SslCertificateTypeEnum;
    validationLevel?: SslCertificateValidationLevelEnum;
}
