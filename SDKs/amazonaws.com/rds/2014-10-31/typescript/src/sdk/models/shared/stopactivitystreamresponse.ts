import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";



export class StopActivityStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kinesisStreamName?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  status?: ActivityStreamStatusEnum;
}
