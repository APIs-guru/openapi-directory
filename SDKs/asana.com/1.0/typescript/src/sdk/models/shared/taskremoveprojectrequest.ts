import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskRemoveProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project: string;
}
