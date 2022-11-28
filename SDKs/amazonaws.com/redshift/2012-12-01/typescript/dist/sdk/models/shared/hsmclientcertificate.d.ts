import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
**/
export declare class HsmClientCertificate extends SpeakeasyBase {
    hsmClientCertificateIdentifier?: string;
    hsmClientCertificatePublicKey?: string;
    tags?: Tag[];
}
