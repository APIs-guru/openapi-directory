import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";


// SegmentImportResource
/** 
 * Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
**/
export class SegmentImportResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelCounts" })
  channelCounts?: Map<string, number>;

  @Metadata({ data: "json, name=ExternalId" })
  externalId: string;

  @Metadata({ data: "json, name=Format" })
  format: FormatEnum;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=S3Url" })
  s3Url: string;

  @Metadata({ data: "json, name=Size" })
  size: number;
}
