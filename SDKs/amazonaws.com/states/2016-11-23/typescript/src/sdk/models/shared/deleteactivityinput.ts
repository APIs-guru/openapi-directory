import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteActivityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityArn" })
  activityArn: string;
}
