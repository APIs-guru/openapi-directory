import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";


// WorldExportJobSummary
/** 
 * Information about a world export job.
**/
export class WorldExportJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: WorldExportJobStatusEnum;

  @Metadata({ data: "json, name=worlds" })
  worlds?: string[];
}
