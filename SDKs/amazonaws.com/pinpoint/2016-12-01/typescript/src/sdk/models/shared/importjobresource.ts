import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";


// ImportJobResource
/** 
 * Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
export class ImportJobResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefineSegment" })
  defineSegment?: boolean;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=Format" })
  format: FormatEnum;

  @Metadata({ data: "json, name=RegisterEndpoints" })
  registerEndpoints?: boolean;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=S3Url" })
  s3Url: string;

  @Metadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @Metadata({ data: "json, name=SegmentName" })
  segmentName?: string;
}
