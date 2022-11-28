import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSampleDataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetSampleDataRequestBodyS3SourceConfig
/** 
 * Contains information about the source configuration in Amazon S3.
**/
export class GetSampleDataRequestBodyS3SourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileFormatDescriptor" })
  fileFormatDescriptor?: shared.FileFormatDescriptor;

  @SpeakeasyMetadata({ data: "json, name=HistoricalDataPathList" })
  historicalDataPathList?: string[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplatedPathList" })
  templatedPathList?: string[];
}


export class GetSampleDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3SourceConfig" })
  s3SourceConfig?: GetSampleDataRequestBodyS3SourceConfig;
}


export class GetSampleDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetSampleDataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetSampleDataRequestBody;
}


export class GetSampleDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSampleDataResponse?: shared.GetSampleDataResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
