import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSamplingRuleHeaders extends SpeakeasyBase {
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


// UpdateSamplingRuleRequestBodySamplingRuleUpdate
/** 
 * A document specifying changes to a sampling rule's configuration.
**/
export class UpdateSamplingRuleRequestBodySamplingRuleUpdate extends SpeakeasyBase {
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
}


export class UpdateSamplingRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SamplingRuleUpdate" })
  samplingRuleUpdate: UpdateSamplingRuleRequestBodySamplingRuleUpdate;
}


export class UpdateSamplingRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateSamplingRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSamplingRuleRequestBody;
}


export class UpdateSamplingRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttledException?: any;

  @SpeakeasyMetadata()
  updateSamplingRuleResult?: shared.UpdateSamplingRuleResult;
}
