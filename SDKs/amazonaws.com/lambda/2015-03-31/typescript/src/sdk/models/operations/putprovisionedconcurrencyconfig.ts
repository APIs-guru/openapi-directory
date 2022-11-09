import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutProvisionedConcurrencyConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class PutProvisionedConcurrencyConfigQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Qualifier" })
  qualifier: string;
}


export class PutProvisionedConcurrencyConfigHeaders extends SpeakeasyBase {
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


export class PutProvisionedConcurrencyConfigRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProvisionedConcurrentExecutions" })
  provisionedConcurrentExecutions: number;
}


export class PutProvisionedConcurrencyConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutProvisionedConcurrencyConfigPathParams;

  @Metadata()
  queryParams: PutProvisionedConcurrencyConfigQueryParams;

  @Metadata()
  headers: PutProvisionedConcurrencyConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutProvisionedConcurrencyConfigRequestBody;
}


export class PutProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  putProvisionedConcurrencyConfigResponse?: shared.PutProvisionedConcurrencyConfigResponse;

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
