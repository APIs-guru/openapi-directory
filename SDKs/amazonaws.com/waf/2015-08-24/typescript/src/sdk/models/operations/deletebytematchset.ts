import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteByteMatchSetXAmzTargetEnum {
    Awswaf20150824DeleteByteMatchSet = "AWSWAF_20150824.DeleteByteMatchSet"
}


export class DeleteByteMatchSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteByteMatchSetXAmzTargetEnum;
}


export class DeleteByteMatchSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteByteMatchSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteByteMatchSetRequest;
}


export class DeleteByteMatchSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteByteMatchSetResponse?: shared.DeleteByteMatchSetResponse;

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
