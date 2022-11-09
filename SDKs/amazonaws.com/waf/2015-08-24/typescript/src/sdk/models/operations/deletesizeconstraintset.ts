import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteSizeConstraintSetXAmzTargetEnum {
    Awswaf20150824DeleteSizeConstraintSet = "AWSWAF_20150824.DeleteSizeConstraintSet"
}


export class DeleteSizeConstraintSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteSizeConstraintSetXAmzTargetEnum;
}


export class DeleteSizeConstraintSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSizeConstraintSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteSizeConstraintSetRequest;
}


export class DeleteSizeConstraintSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSizeConstraintSetResponse?: shared.DeleteSizeConstraintSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafNonEmptyEntityException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafReferencedItemException?: any;

  @Metadata()
  wafStaleDataException?: any;
}
