import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateActivityOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityArn" })
  activityArn: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;
}
