import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes an IP range used in a security group.
**/
export declare class IpRange extends SpeakeasyBase {
    cidrip?: string;
    status?: string;
    tags?: Tag[];
}
