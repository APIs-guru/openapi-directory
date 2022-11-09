import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListResourcesForWebAclxAmzTargetEnum {
    AwswafRegional20161128ListResourcesForWebAcl = "AWSWAF_Regional_20161128.ListResourcesForWebACL"
}


export class ListResourcesForWebAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResourcesForWebAclxAmzTargetEnum;
}


export class ListResourcesForWebAclRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListResourcesForWebAclHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResourcesForWebAclRequest;
}


export class ListResourcesForWebAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listResourcesForWebAclResponse?: shared.ListResourcesForWebAclResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidAccountException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafNonexistentItemException?: any;
}
