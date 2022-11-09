import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRateBasedRuleXAmzTargetEnum {
    AwswafRegional20161128GetRateBasedRule = "AWSWAF_Regional_20161128.GetRateBasedRule"
}


export class GetRateBasedRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRateBasedRuleXAmzTargetEnum;
}


export class GetRateBasedRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRateBasedRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRateBasedRuleRequest;
}


export class GetRateBasedRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRateBasedRuleResponse?: shared.GetRateBasedRuleResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
