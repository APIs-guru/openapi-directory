import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectName" })
  projectName: string;
}
