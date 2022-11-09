import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectArn" })
  projectArn: string;
}
