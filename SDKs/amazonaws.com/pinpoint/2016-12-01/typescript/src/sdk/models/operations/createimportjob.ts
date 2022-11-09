import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImportJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateImportJobHeaders extends SpeakeasyBase {
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


// CreateImportJobRequestBodyImportJobRequest
/** 
 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
**/
export class CreateImportJobRequestBodyImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefineSegment" })
  defineSegment?: boolean;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=Format" })
  format?: shared.FormatEnum;

  @Metadata({ data: "json, name=RegisterEndpoints" })
  registerEndpoints?: boolean;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3Url" })
  s3Url?: string;

  @Metadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @Metadata({ data: "json, name=SegmentName" })
  segmentName?: string;
}


export class CreateImportJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobRequest" })
  importJobRequest: CreateImportJobRequestBodyImportJobRequest;
}


export class CreateImportJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateImportJobPathParams;

  @Metadata()
  headers: CreateImportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateImportJobRequestBody;
}


export class CreateImportJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createImportJobResponse?: shared.CreateImportJobResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
