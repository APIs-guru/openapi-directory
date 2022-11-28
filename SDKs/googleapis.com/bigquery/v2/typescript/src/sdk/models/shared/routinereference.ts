import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoutineReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=routineId" })
  routineId?: string;
}
