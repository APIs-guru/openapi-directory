import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkerBlock } from "./workerblock";


export class ListWorkerBlocksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;

  @Metadata({ data: "json, name=WorkerBlocks", elemType: shared.WorkerBlock })
  workerBlocks?: WorkerBlock[];
}
