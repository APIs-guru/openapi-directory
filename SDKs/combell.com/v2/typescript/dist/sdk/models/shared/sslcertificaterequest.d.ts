import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";
export declare class SslCertificateRequest extends SpeakeasyBase {
    certificateType?: SslCertificateTypeEnum;
    commonName?: string;
    id?: number;
    orderCode?: string;
    validationLevel?: SslCertificateValidationLevelEnum;
    vendor?: SslCertificateVendorEnum;
}
