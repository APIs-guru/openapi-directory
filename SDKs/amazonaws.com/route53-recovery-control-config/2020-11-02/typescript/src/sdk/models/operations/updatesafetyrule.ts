import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSafetyRuleHeaders extends SpeakeasyBase {
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


// UpdateSafetyRuleRequestBodyAssertionRuleUpdate
/** 
 * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
export class UpdateSafetyRuleRequestBodyAssertionRuleUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn?: string;

  @Metadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


// UpdateSafetyRuleRequestBodyGatingRuleUpdate
/** 
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
export class UpdateSafetyRuleRequestBodyGatingRuleUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn?: string;

  @Metadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs?: number;
}


export class UpdateSafetyRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssertionRuleUpdate" })
  assertionRuleUpdate?: UpdateSafetyRuleRequestBodyAssertionRuleUpdate;

  @Metadata({ data: "json, name=GatingRuleUpdate" })
  gatingRuleUpdate?: UpdateSafetyRuleRequestBodyGatingRuleUpdate;
}


export class UpdateSafetyRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSafetyRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSafetyRuleRequestBody;
}


export class UpdateSafetyRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSafetyRuleResponse?: shared.UpdateSafetyRuleResponse;

  @Metadata()
  validationException?: any;
}
