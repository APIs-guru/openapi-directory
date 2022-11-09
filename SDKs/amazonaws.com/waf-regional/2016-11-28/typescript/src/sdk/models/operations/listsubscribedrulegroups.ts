import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListSubscribedRuleGroupsXAmzTargetEnum {
    AwswafRegional20161128ListSubscribedRuleGroups = "AWSWAF_Regional_20161128.ListSubscribedRuleGroups"
}


export class ListSubscribedRuleGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListSubscribedRuleGroupsXAmzTargetEnum;
}


export class ListSubscribedRuleGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListSubscribedRuleGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSubscribedRuleGroupsRequest;
}


export class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSubscribedRuleGroupsResponse?: shared.ListSubscribedRuleGroupsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
