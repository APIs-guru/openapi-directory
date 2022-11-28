import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectVersionArn" })
  projectVersionArn: string;
}
