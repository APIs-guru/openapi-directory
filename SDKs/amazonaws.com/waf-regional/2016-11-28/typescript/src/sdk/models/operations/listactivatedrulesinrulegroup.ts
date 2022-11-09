import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListActivatedRulesInRuleGroupXAmzTargetEnum {
    AwswafRegional20161128ListActivatedRulesInRuleGroup = "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup"
}


export class ListActivatedRulesInRuleGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListActivatedRulesInRuleGroupXAmzTargetEnum;
}


export class ListActivatedRulesInRuleGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListActivatedRulesInRuleGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListActivatedRulesInRuleGroupRequest;
}


export class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listActivatedRulesInRuleGroupResponse?: shared.ListActivatedRulesInRuleGroupResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
