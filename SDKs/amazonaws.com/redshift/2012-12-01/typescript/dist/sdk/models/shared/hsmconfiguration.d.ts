import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
**/
export declare class HsmConfiguration extends SpeakeasyBase {
    description?: string;
    hsmConfigurationIdentifier?: string;
    hsmIpAddress?: string;
    hsmPartitionName?: string;
    tags?: Tag[];
}
