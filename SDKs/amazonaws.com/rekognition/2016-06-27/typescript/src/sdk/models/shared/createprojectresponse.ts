import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProjectArn" })
  projectArn?: string;
}
