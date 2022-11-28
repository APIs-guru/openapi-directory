import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListResourcesForWebAclxAmzTargetEnum {
    AwswafRegional20161128ListResourcesForWebAcl = "AWSWAF_Regional_20161128.ListResourcesForWebACL"
}


export class ListResourcesForWebAclHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResourcesForWebAclxAmzTargetEnum;
}


export class ListResourcesForWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListResourcesForWebAclHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListResourcesForWebAclRequest;
}


export class ListResourcesForWebAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResourcesForWebAclResponse?: shared.ListResourcesForWebAclResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wafInternalErrorException?: any;

  @SpeakeasyMetadata()
  wafInvalidAccountException?: any;

  @SpeakeasyMetadata()
  wafInvalidParameterException?: any;

  @SpeakeasyMetadata()
  wafNonexistentItemException?: any;
}
