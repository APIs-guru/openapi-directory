import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImportJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateImportJobHeaders extends SpeakeasyBase {
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


// CreateImportJobRequestBodyImportJobRequest
/** 
 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
**/
export class CreateImportJobRequestBodyImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefineSegment" })
  defineSegment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: shared.FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=RegisterEndpoints" })
  registerEndpoints?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Url" })
  s3Url?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentName" })
  segmentName?: string;
}


export class CreateImportJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobRequest" })
  importJobRequest: CreateImportJobRequestBodyImportJobRequest;
}


export class CreateImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateImportJobPathParams;

  @SpeakeasyMetadata()
  headers: CreateImportJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateImportJobRequestBody;
}


export class CreateImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createImportJobResponse?: shared.CreateImportJobResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
