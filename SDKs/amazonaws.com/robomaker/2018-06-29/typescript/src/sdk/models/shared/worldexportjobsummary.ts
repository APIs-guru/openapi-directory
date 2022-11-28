import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";



// WorldExportJobSummary
/** 
 * Information about a world export job.
**/
export class WorldExportJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WorldExportJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=worlds" })
  worlds?: string[];
}
