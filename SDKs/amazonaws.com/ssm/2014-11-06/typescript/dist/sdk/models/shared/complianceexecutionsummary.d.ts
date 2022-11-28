import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
**/
export declare class ComplianceExecutionSummary extends SpeakeasyBase {
    executionId?: string;
    executionTime: Date;
    executionType?: string;
}
