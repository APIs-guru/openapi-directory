import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSafetyRuleHeaders extends SpeakeasyBase {
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


// CreateSafetyRuleRequestBodyAssertionRule
/** 
 * A new assertion rule for a control panel.
**/
export class CreateSafetyRuleRequestBodyAssertionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssertedControls" })
  assertedControls?: string[];

  @SpeakeasyMetadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleConfig" })
  ruleConfig?: shared.RuleConfig;

  @SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


// CreateSafetyRuleRequestBodyGatingRule
/** 
 * A new gating rule for a control panel.
**/
export class CreateSafetyRuleRequestBodyGatingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GatingControls" })
  gatingControls?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleConfig" })
  ruleConfig?: shared.RuleConfig;

  @SpeakeasyMetadata({ data: "json, name=TargetControls" })
  targetControls?: string[];

  @SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


export class CreateSafetyRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssertionRule" })
  assertionRule?: CreateSafetyRuleRequestBodyAssertionRule;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=GatingRule" })
  gatingRule?: CreateSafetyRuleRequestBodyGatingRule;
}


export class CreateSafetyRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSafetyRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSafetyRuleRequestBody;
}


export class CreateSafetyRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSafetyRuleResponse?: shared.CreateSafetyRuleResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
