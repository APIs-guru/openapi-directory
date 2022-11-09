import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionStatusEnum } from "./regionstatusenum";
/**
 * Information about a Region in your replication set.
**/
export declare class RegionInfo extends SpeakeasyBase {
    sseKmsKeyId?: string;
    status: RegionStatusEnum;
    statusMessage?: string;
    statusUpdateDateTime: Date;
}
