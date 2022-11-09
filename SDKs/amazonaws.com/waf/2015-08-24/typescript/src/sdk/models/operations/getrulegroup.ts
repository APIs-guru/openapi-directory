import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRuleGroupXAmzTargetEnum {
    Awswaf20150824GetRuleGroup = "AWSWAF_20150824.GetRuleGroup"
}


export class GetRuleGroupHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetRuleGroupXAmzTargetEnum;
}


export class GetRuleGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRuleGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRuleGroupRequest;
}


export class GetRuleGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRuleGroupResponse?: shared.GetRuleGroupResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
