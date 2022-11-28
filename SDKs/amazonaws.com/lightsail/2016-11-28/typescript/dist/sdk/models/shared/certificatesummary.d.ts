import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail SSL/TLS certificate.
**/
export declare class CertificateSummary extends SpeakeasyBase {
    certificateArn?: string;
    certificateDetail?: Certificate;
    certificateName?: string;
    domainName?: string;
    tags?: Tag[];
}
