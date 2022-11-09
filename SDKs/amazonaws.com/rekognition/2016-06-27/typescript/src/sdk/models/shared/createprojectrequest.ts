import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectName" })
  projectName: string;
}
