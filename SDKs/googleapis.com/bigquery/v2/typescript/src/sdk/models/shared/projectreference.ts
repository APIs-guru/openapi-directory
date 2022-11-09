import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
