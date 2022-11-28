import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the output location for managed spot training checkpoint data.
**/
export declare class CheckpointConfig extends SpeakeasyBase {
    localPath?: string;
    s3Uri: string;
}
