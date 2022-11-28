import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutFunctionCodeSigningConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PutFunctionCodeSigningConfigHeaders extends SpeakeasyBase {
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


export class PutFunctionCodeSigningConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSigningConfigArn" })
  codeSigningConfigArn: string;
}


export class PutFunctionCodeSigningConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutFunctionCodeSigningConfigPathParams;

  @SpeakeasyMetadata()
  headers: PutFunctionCodeSigningConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutFunctionCodeSigningConfigRequestBody;
}


export class PutFunctionCodeSigningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codeSigningConfigNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  putFunctionCodeSigningConfigResponse?: shared.PutFunctionCodeSigningConfigResponse;

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
