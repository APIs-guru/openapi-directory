import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWorldExportJobHeaders extends SpeakeasyBase {
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


// CreateWorldExportJobRequestBodyOutputLocation
/** 
 * The output location.
**/
export class CreateWorldExportJobRequestBodyOutputLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Prefix" })
  s3Prefix?: string;
}


export class CreateWorldExportJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=iamRole" })
  iamRole: string;

  @SpeakeasyMetadata({ data: "json, name=outputLocation" })
  outputLocation: CreateWorldExportJobRequestBodyOutputLocation;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=worlds" })
  worlds: string[];
}


export class CreateWorldExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWorldExportJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateWorldExportJobRequestBody;
}


export class CreateWorldExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createWorldExportJobResponse?: shared.CreateWorldExportJobResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
