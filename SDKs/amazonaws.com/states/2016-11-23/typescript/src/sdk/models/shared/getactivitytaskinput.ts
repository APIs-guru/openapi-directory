import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActivityTaskInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityArn" })
  activityArn: string;

  @Metadata({ data: "json, name=workerName" })
  workerName?: string;
}
