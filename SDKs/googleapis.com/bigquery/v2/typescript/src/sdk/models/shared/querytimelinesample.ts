import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryTimelineSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeUnits" })
  activeUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=completedUnits" })
  completedUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=elapsedMs" })
  elapsedMs?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedRunnableUnits" })
  estimatedRunnableUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingUnits" })
  pendingUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSlotMs" })
  totalSlotMs?: string;
}
