import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
