import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFunctionCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class UpdateFunctionCodeHeaders extends SpeakeasyBase {
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


export class UpdateFunctionCodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Publish" })
  publish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @SpeakeasyMetadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


export class UpdateFunctionCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFunctionCodePathParams;

  @SpeakeasyMetadata()
  headers: UpdateFunctionCodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionCodeRequestBody;
}


export class UpdateFunctionCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codeSigningConfigNotFoundException?: any;

  @SpeakeasyMetadata()
  codeStorageExceededException?: any;

  @SpeakeasyMetadata()
  codeVerificationFailedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @SpeakeasyMetadata()
  invalidCodeSignatureException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
