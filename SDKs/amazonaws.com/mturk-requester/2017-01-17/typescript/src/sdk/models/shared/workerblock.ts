import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerBlock
/** 
 *  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. 
**/
export class WorkerBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
