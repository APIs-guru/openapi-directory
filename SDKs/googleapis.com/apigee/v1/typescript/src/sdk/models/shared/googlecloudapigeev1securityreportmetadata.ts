import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1SecurityReportMetadata
/** 
 * Metadata for the security report.
**/
export class GoogleCloudApigeeV1SecurityReportMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=endTimestamp" })
  endTimestamp?: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;

  @Metadata({ data: "json, name=timeUnit" })
  timeUnit?: string;
}
