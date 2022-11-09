import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListHiTsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListHiTsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListHiTs = "MTurkRequesterServiceV20170117.ListHITs"
}


export class ListHiTsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListHiTsXAmzTargetEnum;
}


export class ListHiTsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHiTsQueryParams;

  @Metadata()
  headers: ListHiTsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListHiTsRequest;
}


export class ListHiTsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHiTsResponse?: shared.ListHiTsResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
