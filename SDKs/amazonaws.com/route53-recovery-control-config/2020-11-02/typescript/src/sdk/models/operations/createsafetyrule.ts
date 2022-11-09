import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSafetyRuleHeaders extends SpeakeasyBase {
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


// CreateSafetyRuleRequestBodyAssertionRule
/** 
 * A new assertion rule for a control panel.
**/
export class CreateSafetyRuleRequestBodyAssertionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssertedControls" })
  assertedControls?: string[];

  @Metadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RuleConfig" })
  ruleConfig?: shared.RuleConfig;

  @Metadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


// CreateSafetyRuleRequestBodyGatingRule
/** 
 * A new gating rule for a control panel.
**/
export class CreateSafetyRuleRequestBodyGatingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @Metadata({ data: "json, name=GatingControls" })
  gatingControls?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RuleConfig" })
  ruleConfig?: shared.RuleConfig;

  @Metadata({ data: "json, name=TargetControls" })
  targetControls?: string[];

  @Metadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


export class CreateSafetyRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssertionRule" })
  assertionRule?: CreateSafetyRuleRequestBodyAssertionRule;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=GatingRule" })
  gatingRule?: CreateSafetyRuleRequestBodyGatingRule;
}


export class CreateSafetyRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSafetyRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSafetyRuleRequestBody;
}


export class CreateSafetyRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSafetyRuleResponse?: shared.CreateSafetyRuleResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
