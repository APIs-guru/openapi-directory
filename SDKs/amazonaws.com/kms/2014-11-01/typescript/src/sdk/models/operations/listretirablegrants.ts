import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListRetirableGrantsXAmzTargetEnum {
    TrentServiceListRetirableGrants = "TrentService.ListRetirableGrants"
}


export class ListRetirableGrantsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRetirableGrantsXAmzTargetEnum;
}


export class ListRetirableGrantsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListRetirableGrantsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRetirableGrantsRequest;
}


export class ListRetirableGrantsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependencyTimeoutException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidMarkerException?: any;

  @Metadata()
  kmsInternalException?: any;

  @Metadata()
  listGrantsResponse?: shared.ListGrantsResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
