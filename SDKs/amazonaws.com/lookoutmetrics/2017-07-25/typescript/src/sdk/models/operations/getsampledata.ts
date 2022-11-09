import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSampleDataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetSampleDataRequestBodyS3SourceConfig
/** 
 * Contains information about the source configuration in Amazon S3.
**/
export class GetSampleDataRequestBodyS3SourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileFormatDescriptor" })
  fileFormatDescriptor?: shared.FileFormatDescriptor;

  @Metadata({ data: "json, name=HistoricalDataPathList" })
  historicalDataPathList?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=TemplatedPathList" })
  templatedPathList?: string[];
}


export class GetSampleDataRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3SourceConfig" })
  s3SourceConfig?: GetSampleDataRequestBodyS3SourceConfig;
}


export class GetSampleDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSampleDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetSampleDataRequestBody;
}


export class GetSampleDataResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getSampleDataResponse?: shared.GetSampleDataResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
