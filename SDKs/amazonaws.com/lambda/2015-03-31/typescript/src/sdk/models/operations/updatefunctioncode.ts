import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFunctionCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class UpdateFunctionCodeHeaders extends SpeakeasyBase {
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


export class UpdateFunctionCodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=Publish" })
  publish?: boolean;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @Metadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


export class UpdateFunctionCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFunctionCodePathParams;

  @Metadata()
  headers: UpdateFunctionCodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFunctionCodeRequestBody;
}


export class UpdateFunctionCodeResponse extends SpeakeasyBase {
  @Metadata()
  codeSigningConfigNotFoundException?: any;

  @Metadata()
  codeStorageExceededException?: any;

  @Metadata()
  codeVerificationFailedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  functionConfiguration?: shared.FunctionConfiguration;

  @Metadata()
  invalidCodeSignatureException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
