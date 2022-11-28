import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateRequestValidationTypeEnum } from "./sslcertificaterequestvalidationtypeenum";
export declare class SslCertificateRequestValidation extends SpeakeasyBase {
    autoValidated?: boolean;
    cnameValidationContent?: string;
    cnameValidationName?: string;
    dnsName?: string;
    emailAddresses?: string[];
    fileValidationContent?: string[];
    fileValidationUrlHttp?: string;
    fileValidationUrlHttps?: string;
    type?: SslCertificateRequestValidationTypeEnum;
}
