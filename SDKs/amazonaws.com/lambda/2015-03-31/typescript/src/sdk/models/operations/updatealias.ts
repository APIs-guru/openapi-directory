import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FunctionName" })
  functionName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}


export class UpdateAliasHeaders extends SpeakeasyBase {
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


// UpdateAliasRequestBodyRoutingConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
export class UpdateAliasRequestBodyRoutingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalVersionWeights" })
  additionalVersionWeights?: Map<string, number>;
}


export class UpdateAliasRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FunctionVersion" })
  functionVersion?: string;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=RoutingConfig" })
  routingConfig?: UpdateAliasRequestBodyRoutingConfig;
}


export class UpdateAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAliasPathParams;

  @Metadata()
  headers: UpdateAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAliasRequestBody;
}


export class UpdateAliasResponse extends SpeakeasyBase {
  @Metadata()
  aliasConfiguration?: shared.AliasConfiguration;

  @Metadata()
  contentType: string;

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
