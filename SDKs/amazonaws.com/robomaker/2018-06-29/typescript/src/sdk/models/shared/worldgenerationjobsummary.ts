import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";



// WorldGenerationJobSummary
/** 
 * Information about a world generator job.
**/
export class WorldGenerationJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=failedWorldCount" })
  failedWorldCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WorldGenerationJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=succeededWorldCount" })
  succeededWorldCount?: number;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=worldCount" })
  worldCount?: WorldCount;
}
