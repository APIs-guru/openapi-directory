import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslSubjectAltName } from "./sslsubjectaltname";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateRequestValidation } from "./sslcertificaterequestvalidation";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";
export declare class SslCertificateRequestDetail extends SpeakeasyBase {
    certificateType?: SslCertificateTypeEnum;
    commonName?: string;
    id?: number;
    orderCode?: string;
    subjectAltNames?: SslSubjectAltName[];
    validationLevel?: SslCertificateValidationLevelEnum;
    validations?: SslCertificateRequestValidation[];
    vendor?: SslCertificateVendorEnum;
}
