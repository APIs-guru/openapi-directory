import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActivityTaskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityArn" })
  activityArn: string;

  @SpeakeasyMetadata({ data: "json, name=workerName" })
  workerName?: string;
}
