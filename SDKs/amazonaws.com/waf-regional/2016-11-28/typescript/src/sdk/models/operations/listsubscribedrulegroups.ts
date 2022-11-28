import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListSubscribedRuleGroupsXAmzTargetEnum {
    AwswafRegional20161128ListSubscribedRuleGroups = "AWSWAF_Regional_20161128.ListSubscribedRuleGroups"
}


export class ListSubscribedRuleGroupsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListSubscribedRuleGroupsXAmzTargetEnum;
}


export class ListSubscribedRuleGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListSubscribedRuleGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListSubscribedRuleGroupsRequest;
}


export class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSubscribedRuleGroupsResponse?: shared.ListSubscribedRuleGroupsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafNonexistentItemException?: any;
}
