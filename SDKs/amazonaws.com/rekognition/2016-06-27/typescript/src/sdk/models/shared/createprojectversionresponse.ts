import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProjectVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn?: string;
}
