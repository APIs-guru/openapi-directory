import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutFunctionCodeSigningConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PutFunctionCodeSigningConfigHeaders extends SpeakeasyBase {
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


export class PutFunctionCodeSigningConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;
}


export class PutFunctionCodeSigningConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutFunctionCodeSigningConfigPathParams;

  @Metadata()
  headers: PutFunctionCodeSigningConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutFunctionCodeSigningConfigRequestBody;
}


export class PutFunctionCodeSigningConfigResponse extends SpeakeasyBase {
  @Metadata()
  codeSigningConfigNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  putFunctionCodeSigningConfigResponse?: shared.PutFunctionCodeSigningConfigResponse;

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
