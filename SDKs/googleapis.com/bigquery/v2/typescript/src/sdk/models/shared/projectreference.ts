import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
