import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateWorldExportJobHeaders extends SpeakeasyBase {
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


// CreateWorldExportJobRequestBodyOutputLocation
/** 
 * The output location.
**/
export class CreateWorldExportJobRequestBodyOutputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Prefix" })
  s3Prefix?: string;
}


export class CreateWorldExportJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=iamRole" })
  iamRole: string;

  @Metadata({ data: "json, name=outputLocation" })
  outputLocation: CreateWorldExportJobRequestBodyOutputLocation;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=worlds" })
  worlds: string[];
}


export class CreateWorldExportJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWorldExportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateWorldExportJobRequestBody;
}


export class CreateWorldExportJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createWorldExportJobResponse?: shared.CreateWorldExportJobResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
