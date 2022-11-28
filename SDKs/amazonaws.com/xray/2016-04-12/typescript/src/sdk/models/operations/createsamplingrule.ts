import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSamplingRuleHeaders extends SpeakeasyBase {
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


// CreateSamplingRuleRequestBodySamplingRule
/** 
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
export class CreateSamplingRuleRequestBodySamplingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=FixedRate" })
  fixedRate?: number;

  @SpeakeasyMetadata({ data: "json, name=HTTPMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=Host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ReservoirSize" })
  reservoirSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleARN" })
  ruleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceType" })
  serviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=URLPath" })
  urlPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}


export class CreateSamplingRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SamplingRule" })
  samplingRule: CreateSamplingRuleRequestBodySamplingRule;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateSamplingRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSamplingRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSamplingRuleRequestBody;
}


export class CreateSamplingRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSamplingRuleResult?: shared.CreateSamplingRuleResult;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  ruleLimitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;
}
