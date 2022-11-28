import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudApigeeV1QueryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=endTimestamp" })
  endTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=outputFormat" })
  outputFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: string;
}
