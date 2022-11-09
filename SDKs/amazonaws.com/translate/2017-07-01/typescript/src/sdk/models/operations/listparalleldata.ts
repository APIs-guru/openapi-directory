import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListParallelDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListParallelDataXAmzTargetEnum {
    AwsShineFrontendService20170701ListParallelData = "AWSShineFrontendService_20170701.ListParallelData"
}


export class ListParallelDataHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListParallelDataXAmzTargetEnum;
}


export class ListParallelDataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListParallelDataQueryParams;

  @Metadata()
  headers: ListParallelDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListParallelDataRequest;
}


export class ListParallelDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  listParallelDataResponse?: shared.ListParallelDataResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
