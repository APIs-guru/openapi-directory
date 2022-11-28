import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn: string;
}
