import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
import { WorldCount } from "./worldcount";


// WorldGenerationJobSummary
/** 
 * Information about a world generator job.
**/
export class WorldGenerationJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=failedWorldCount" })
  failedWorldCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: WorldGenerationJobStatusEnum;

  @Metadata({ data: "json, name=succeededWorldCount" })
  succeededWorldCount?: number;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=worldCount" })
  worldCount?: WorldCount;
}
