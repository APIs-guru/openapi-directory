import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListRateBasedRulesXAmzTargetEnum {
    AwswafRegional20161128ListRateBasedRules = "AWSWAF_Regional_20161128.ListRateBasedRules"
}


export class ListRateBasedRulesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRateBasedRulesXAmzTargetEnum;
}


export class ListRateBasedRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListRateBasedRulesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListRateBasedRulesRequest;
}


export class ListRateBasedRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRateBasedRulesResponse?: shared.ListRateBasedRulesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidAccountException?: any;
}
