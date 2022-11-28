import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// SegmentImportResource
/** 
 * Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
**/
export class SegmentImportResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelCounts" })
  channelCounts?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3Url" })
  s3Url: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size: number;
}
