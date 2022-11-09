import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSizeConstraintSetXAmzTargetEnum {
    Awswaf20150824GetSizeConstraintSet = "AWSWAF_20150824.GetSizeConstraintSet"
}


export class GetSizeConstraintSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetSizeConstraintSetXAmzTargetEnum;
}


export class GetSizeConstraintSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSizeConstraintSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetSizeConstraintSetRequest;
}


export class GetSizeConstraintSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSizeConstraintSetResponse?: shared.GetSizeConstraintSetResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
