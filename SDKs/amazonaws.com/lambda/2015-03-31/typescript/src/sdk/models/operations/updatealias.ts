import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}


export class UpdateAliasHeaders extends SpeakeasyBase {
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


// UpdateAliasRequestBodyRoutingConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
export class UpdateAliasRequestBodyRoutingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalVersionWeights" })
  additionalVersionWeights?: Map<string, number>;
}


export class UpdateAliasRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionVersion" })
  functionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingConfig" })
  routingConfig?: UpdateAliasRequestBodyRoutingConfig;
}


export class UpdateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAliasPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAliasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAliasRequestBody;
}


export class UpdateAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliasConfiguration?: shared.AliasConfiguration;

  @SpeakeasyMetadata()
  contentType: string;

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
