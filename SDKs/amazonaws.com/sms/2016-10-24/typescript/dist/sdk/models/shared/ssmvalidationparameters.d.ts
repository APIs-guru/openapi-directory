import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";
/**
 * Contains validation parameters.
**/
export declare class SsmValidationParameters extends SpeakeasyBase {
    command?: string;
    executionTimeoutSeconds?: number;
    instanceId?: string;
    outputS3BucketName?: string;
    scriptType?: ScriptTypeEnum;
    source?: Source;
}
