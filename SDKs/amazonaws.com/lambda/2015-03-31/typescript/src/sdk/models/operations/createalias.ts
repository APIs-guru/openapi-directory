import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;
}


export class CreateAliasHeaders extends SpeakeasyBase {
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


// CreateAliasRequestBodyRoutingConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
export class CreateAliasRequestBodyRoutingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalVersionWeights" })
  additionalVersionWeights?: Map<string, number>;
}


export class CreateAliasRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionVersion" })
  functionVersion: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingConfig" })
  routingConfig?: CreateAliasRequestBodyRoutingConfig;
}


export class CreateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAliasPathParams;

  @SpeakeasyMetadata()
  headers: CreateAliasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateAliasRequestBody;
}


export class CreateAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliasConfiguration?: shared.AliasConfiguration;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

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
