import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteActivityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityArn" })
  activityArn: string;
}
