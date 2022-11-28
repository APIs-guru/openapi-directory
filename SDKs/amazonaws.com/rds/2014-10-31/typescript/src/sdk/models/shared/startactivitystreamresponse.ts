import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";



export class StartActivityStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applyImmediately?: boolean;

  @SpeakeasyMetadata()
  engineNativeAuditFieldsIncluded?: boolean;

  @SpeakeasyMetadata()
  kinesisStreamName?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  mode?: ActivityStreamModeEnum;

  @SpeakeasyMetadata()
  status?: ActivityStreamStatusEnum;
}
