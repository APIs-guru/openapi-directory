import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteXssMatchSetXAmzTargetEnum {
    AwswafRegional20161128DeleteXssMatchSet = "AWSWAF_Regional_20161128.DeleteXssMatchSet"
}


export class DeleteXssMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteXssMatchSetXAmzTargetEnum;
}


export class DeleteXssMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteXssMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteXssMatchSetRequest;
}


export class DeleteXssMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteXssMatchSetResponse?: shared.DeleteXssMatchSetResponse;

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
