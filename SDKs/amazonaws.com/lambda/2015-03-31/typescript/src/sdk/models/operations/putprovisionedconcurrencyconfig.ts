import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProvisionedConcurrencyConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PutProvisionedConcurrencyConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier: string;
}


export class PutProvisionedConcurrencyConfigHeaders extends SpeakeasyBase {
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


export class PutProvisionedConcurrencyConfigRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProvisionedConcurrentExecutions" })
  provisionedConcurrentExecutions: number;
}


export class PutProvisionedConcurrencyConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProvisionedConcurrencyConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: PutProvisionedConcurrencyConfigQueryParams;

  @SpeakeasyMetadata()
  headers: PutProvisionedConcurrencyConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutProvisionedConcurrencyConfigRequestBody;
}


export class PutProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  putProvisionedConcurrencyConfigResponse?: shared.PutProvisionedConcurrencyConfigResponse;

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
