import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListWorkerBlocksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListWorkerBlocksXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListWorkerBlocks = "MTurkRequesterServiceV20170117.ListWorkerBlocks"
}


export class ListWorkerBlocksHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListWorkerBlocksXAmzTargetEnum;
}


export class ListWorkerBlocksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListWorkerBlocksQueryParams;

  @Metadata()
  headers: ListWorkerBlocksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListWorkerBlocksRequest;
}


export class ListWorkerBlocksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkerBlocksResponse?: shared.ListWorkerBlocksResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
