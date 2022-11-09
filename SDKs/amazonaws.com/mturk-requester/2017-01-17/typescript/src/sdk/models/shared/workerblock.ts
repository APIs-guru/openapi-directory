import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerBlock
/** 
 *  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. 
**/
export class WorkerBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reason" })
  reason?: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
