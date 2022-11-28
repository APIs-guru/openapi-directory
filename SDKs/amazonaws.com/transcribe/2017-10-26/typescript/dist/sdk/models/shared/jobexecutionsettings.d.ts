import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about when a transcription job should be executed.
**/
export declare class JobExecutionSettings extends SpeakeasyBase {
    allowDeferredExecution?: boolean;
    dataAccessRoleArn?: string;
}
