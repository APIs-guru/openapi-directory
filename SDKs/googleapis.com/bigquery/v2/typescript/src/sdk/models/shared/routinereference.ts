import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RoutineReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=routineId" })
  routineId?: string;
}
