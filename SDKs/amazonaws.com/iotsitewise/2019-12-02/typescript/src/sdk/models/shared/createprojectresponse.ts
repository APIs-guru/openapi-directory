import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=projectId" })
  projectId: string;
}
