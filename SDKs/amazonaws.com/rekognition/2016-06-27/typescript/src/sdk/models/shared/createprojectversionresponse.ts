import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProjectVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn?: string;
}
