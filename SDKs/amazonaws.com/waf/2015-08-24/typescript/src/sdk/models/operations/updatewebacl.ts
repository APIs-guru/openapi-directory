import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateWebAclxAmzTargetEnum {
    Awswaf20150824UpdateWebAcl = "AWSWAF_20150824.UpdateWebACL"
}


export class UpdateWebAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateWebAclxAmzTargetEnum;
}


export class UpdateWebAclRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateWebAclHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateWebAclRequest;
}


export class UpdateWebAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateWebAclResponse?: shared.UpdateWebAclResponse;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidOperationException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafLimitsExceededException?: any;

  @Metadata()
  wafNonexistentContainerException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafReferencedItemException?: any;

  @Metadata()
  wafStaleDataException?: any;

  @Metadata()
  wafSubscriptionNotFoundException?: any;
}
