import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteRateBasedRuleXAmzTargetEnum {
    Awswaf20150824DeleteRateBasedRule = "AWSWAF_20150824.DeleteRateBasedRule"
}


export class DeleteRateBasedRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteRateBasedRuleXAmzTargetEnum;
}


export class DeleteRateBasedRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteRateBasedRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteRateBasedRuleRequest;
}


export class DeleteRateBasedRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteRateBasedRuleResponse?: shared.DeleteRateBasedRuleResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidAccountException?: any;

  @SpeakeasyMetadata()
  wafNonEmptyEntityException?: any;

  @SpeakeasyMetadata()
  wafNonexistentItemException?: any;

  @SpeakeasyMetadata()
  wafReferencedItemException?: any;

  @SpeakeasyMetadata()
  wafStaleDataException?: any;

  @SpeakeasyMetadata()
  wafTagOperationException?: any;

  @SpeakeasyMetadata()
  wafTagOperationInternalErrorException?: any;
}
