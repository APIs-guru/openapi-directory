import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryTimelineSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeUnits" })
  activeUnits?: string;

  @Metadata({ data: "json, name=completedUnits" })
  completedUnits?: string;

  @Metadata({ data: "json, name=elapsedMs" })
  elapsedMs?: string;

  @Metadata({ data: "json, name=estimatedRunnableUnits" })
  estimatedRunnableUnits?: string;

  @Metadata({ data: "json, name=pendingUnits" })
  pendingUnits?: string;

  @Metadata({ data: "json, name=totalSlotMs" })
  totalSlotMs?: string;
}
