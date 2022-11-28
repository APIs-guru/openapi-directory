import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComplianceExecutionSummary
/** 
 * A summary of the call execution that includes an execution ID, the type of execution (for example, <code>Command</code>), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
**/
export class ComplianceExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionTime" })
  executionTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutionType" })
  executionType?: string;
}
