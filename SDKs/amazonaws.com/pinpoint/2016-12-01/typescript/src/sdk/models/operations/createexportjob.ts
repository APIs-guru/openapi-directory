import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateExportJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateExportJobHeaders extends SpeakeasyBase {
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


// CreateExportJobRequestBodyExportJobRequest
/** 
 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
**/
export class CreateExportJobRequestBodyExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3UrlPrefix" })
  s3UrlPrefix?: string;

  @Metadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @Metadata({ data: "json, name=SegmentVersion" })
  segmentVersion?: number;
}


export class CreateExportJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportJobRequest" })
  exportJobRequest: CreateExportJobRequestBodyExportJobRequest;
}


export class CreateExportJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateExportJobPathParams;

  @Metadata()
  headers: CreateExportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateExportJobRequestBody;
}


export class CreateExportJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createExportJobResponse?: shared.CreateExportJobResponse;

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
