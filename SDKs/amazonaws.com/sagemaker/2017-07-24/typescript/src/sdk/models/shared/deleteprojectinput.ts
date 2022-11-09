import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectName" })
  projectName: string;
}
