import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Run
/** 
 * Specifies the <code>runId</code> of a workflow execution.
**/
export class Run extends SpeakeasyBase {
  @Metadata({ data: "json, name=runId" })
  runId?: string;
}
