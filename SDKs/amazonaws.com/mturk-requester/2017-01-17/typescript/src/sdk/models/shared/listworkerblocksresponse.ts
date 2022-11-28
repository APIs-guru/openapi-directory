import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerBlock } from "./workerblock";



export class ListWorkerBlocksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkerBlocks", elemType: WorkerBlock })
  workerBlocks?: WorkerBlock[];
}
