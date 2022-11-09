import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskRemoveProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project: string;
}
