import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1SecurityReportMetadata
/** 
 * Metadata for the security report.
**/
export class GoogleCloudApigeeV1SecurityReportMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=endTimestamp" })
  endTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: string;
}
