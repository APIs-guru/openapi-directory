import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn?: string;
}
