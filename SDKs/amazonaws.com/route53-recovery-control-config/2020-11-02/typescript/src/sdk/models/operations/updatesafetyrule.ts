import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSafetyRuleHeaders extends SpeakeasyBase {
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


// UpdateSafetyRuleRequestBodyAssertionRuleUpdate
/** 
 * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
export class UpdateSafetyRuleRequestBodyAssertionRuleUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


// UpdateSafetyRuleRequestBodyGatingRuleUpdate
/** 
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
export class UpdateSafetyRuleRequestBodyGatingRuleUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


export class UpdateSafetyRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssertionRuleUpdate" })
  assertionRuleUpdate?: UpdateSafetyRuleRequestBodyAssertionRuleUpdate;

  @SpeakeasyMetadata({ data: "json, name=GatingRuleUpdate" })
  gatingRuleUpdate?: UpdateSafetyRuleRequestBodyGatingRuleUpdate;
}


export class UpdateSafetyRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateSafetyRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSafetyRuleRequestBody;
}


export class UpdateSafetyRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSafetyRuleResponse?: shared.UpdateSafetyRuleResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
