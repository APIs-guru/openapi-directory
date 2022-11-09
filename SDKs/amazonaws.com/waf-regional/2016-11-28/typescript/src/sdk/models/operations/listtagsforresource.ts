import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListTagsForResourceXAmzTargetEnum {
    AwswafRegional20161128ListTagsForResource = "AWSWAF_Regional_20161128.ListTagsForResource"
}


export class ListTagsForResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListTagsForResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTagsForResourceRequest;
}


export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTagsForResourceResponse?: shared.ListTagsForResourceResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  wafBadRequestException?: any;

  @Metadata()
  wafInternalErrorException?: any;

  @Metadata()
  wafInvalidParameterException?: any;

  @Metadata()
  wafNonexistentItemException?: any;

  @Metadata()
  wafTagOperationException?: any;

  @Metadata()
  wafTagOperationInternalErrorException?: any;
}
