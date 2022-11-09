import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRateBasedRuleManagedKeysXAmzTargetEnum {
    Awswaf20150824GetRateBasedRuleManagedKeys = "AWSWAF_20150824.GetRateBasedRuleManagedKeys"
}


export class GetRateBasedRuleManagedKeysHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRateBasedRuleManagedKeysXAmzTargetEnum;
}


export class GetRateBasedRuleManagedKeysRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRateBasedRuleManagedKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRateBasedRuleManagedKeysRequest;
}


export class GetRateBasedRuleManagedKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRateBasedRuleManagedKeysResponse?: shared.GetRateBasedRuleManagedKeysResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
