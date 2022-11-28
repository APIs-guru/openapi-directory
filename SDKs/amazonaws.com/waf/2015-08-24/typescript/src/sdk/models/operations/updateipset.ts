import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateIpSetXAmzTargetEnum {
    Awswaf20150824UpdateIpSet = "AWSWAF_20150824.UpdateIPSet"
}


export class UpdateIpSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateIpSetXAmzTargetEnum;
}


export class UpdateIpSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateIpSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateIpSetRequest;
}


export class UpdateIpSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateIpSetResponse?: shared.UpdateIpSetResponse;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidAccountException?: any;

  @SpeakeasyMetadata()
  wafInvalidOperationException?: any;

  @SpeakeasyMetadata()
  wafInvalidParameterException?: any;

  @SpeakeasyMetadata()
  wafLimitsExceededException?: any;

  @SpeakeasyMetadata()
  wafNonexistentContainerException?: any;

  @SpeakeasyMetadata()
  wafNonexistentItemException?: any;

  @SpeakeasyMetadata()
  wafReferencedItemException?: any;

  @SpeakeasyMetadata()
  wafStaleDataException?: any;
}
