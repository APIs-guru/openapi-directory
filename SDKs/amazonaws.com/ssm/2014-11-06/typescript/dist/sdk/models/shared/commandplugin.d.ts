import { SpeakeasyBase } from "../../../internal/utils";
import { CommandPluginStatusEnum } from "./commandpluginstatusenum";
/**
 * Describes plugin details.
**/
export declare class CommandPlugin extends SpeakeasyBase {
    name?: string;
    output?: string;
    outputS3BucketName?: string;
    outputS3KeyPrefix?: string;
    outputS3Region?: string;
    responseCode?: number;
    responseFinishDateTime?: Date;
    responseStartDateTime?: Date;
    standardErrorUrl?: string;
    standardOutputUrl?: string;
    status?: CommandPluginStatusEnum;
    statusDetails?: string;
}
