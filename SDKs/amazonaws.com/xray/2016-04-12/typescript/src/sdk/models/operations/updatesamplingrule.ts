import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSamplingRuleHeaders extends SpeakeasyBase {
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


// UpdateSamplingRuleRequestBodySamplingRuleUpdate
/** 
 * A document specifying changes to a sampling rule's configuration.
**/
export class UpdateSamplingRuleRequestBodySamplingRuleUpdate extends SpeakeasyBase {
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
}


export class UpdateSamplingRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SamplingRuleUpdate" })
  samplingRuleUpdate: UpdateSamplingRuleRequestBodySamplingRuleUpdate;
}


export class UpdateSamplingRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSamplingRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSamplingRuleRequestBody;
}


export class UpdateSamplingRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;

  @Metadata()
  updateSamplingRuleResult?: shared.UpdateSamplingRuleResult;
}
