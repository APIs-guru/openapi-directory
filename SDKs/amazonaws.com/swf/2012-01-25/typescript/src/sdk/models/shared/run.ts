import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Run
/** 
 * Specifies the <code>runId</code> of a workflow execution.
**/
export class Run extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;
}
