import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteRegexMatchSetXAmzTargetEnum {
    AwswafRegional20161128DeleteRegexMatchSet = "AWSWAF_Regional_20161128.DeleteRegexMatchSet"
}


export class DeleteRegexMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteRegexMatchSetXAmzTargetEnum;
}


export class DeleteRegexMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteRegexMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteRegexMatchSetRequest;
}


export class DeleteRegexMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteRegexMatchSetResponse?: shared.DeleteRegexMatchSetResponse;

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
