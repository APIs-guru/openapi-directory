import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSamplingRuleHeaders extends SpeakeasyBase {
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


// CreateSamplingRuleRequestBodySamplingRule
/** 
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
export class CreateSamplingRuleRequestBodySamplingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=FixedRate" })
  fixedRate?: number;

  @Metadata({ data: "json, name=HTTPMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=Host" })
  host?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=ReservoirSize" })
  reservoirSize?: number;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RuleARN" })
  ruleArn?: string;

  @Metadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=ServiceType" })
  serviceType?: string;

  @Metadata({ data: "json, name=URLPath" })
  urlPath?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}


export class CreateSamplingRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SamplingRule" })
  samplingRule: CreateSamplingRuleRequestBodySamplingRule;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateSamplingRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSamplingRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSamplingRuleRequestBody;
}


export class CreateSamplingRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSamplingRuleResult?: shared.CreateSamplingRuleResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  ruleLimitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
