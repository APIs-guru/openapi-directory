import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteGeoMatchSetXAmzTargetEnum {
    Awswaf20150824DeleteGeoMatchSet = "AWSWAF_20150824.DeleteGeoMatchSet"
}


export class DeleteGeoMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteGeoMatchSetXAmzTargetEnum;
}


export class DeleteGeoMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteGeoMatchSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteGeoMatchSetRequest;
}


export class DeleteGeoMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteGeoMatchSetResponse?: shared.DeleteGeoMatchSetResponse;

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
}
