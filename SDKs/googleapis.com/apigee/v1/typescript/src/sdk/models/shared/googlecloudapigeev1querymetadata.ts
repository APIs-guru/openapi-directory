import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudApigeeV1QueryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=endTimestamp" })
  endTimestamp?: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=outputFormat" })
  outputFormat?: string;

  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @Metadata({ data: "json, name=timeUnit" })
  timeUnit?: string;
}
