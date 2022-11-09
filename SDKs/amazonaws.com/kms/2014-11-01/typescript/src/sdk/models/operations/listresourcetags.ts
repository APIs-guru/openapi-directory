import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListResourceTagsXAmzTargetEnum {
    TrentServiceListResourceTags = "TrentService.ListResourceTags"
}


export class ListResourceTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResourceTagsXAmzTargetEnum;
}


export class ListResourceTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListResourceTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResourceTagsRequest;
}


export class ListResourceTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidMarkerException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  listResourceTagsResponse?: shared.ListResourceTagsResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
