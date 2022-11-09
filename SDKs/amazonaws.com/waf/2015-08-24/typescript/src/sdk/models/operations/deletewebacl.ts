import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteWebAclxAmzTargetEnum {
    Awswaf20150824DeleteWebAcl = "AWSWAF_20150824.DeleteWebACL"
}


export class DeleteWebAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteWebAclxAmzTargetEnum;
}


export class DeleteWebAclRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteWebAclHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteWebAclRequest;
}


export class DeleteWebAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteWebAclResponse?: shared.DeleteWebAclResponse;

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

  @Metadata()
  wafTagOperationException?: any;

  @Metadata()
  wafTagOperationInternalErrorException?: any;
}
