import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFaceSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetFaceSearchXAmzTargetEnum {
    RekognitionServiceGetFaceSearch = "RekognitionService.GetFaceSearch"
}


export class GetFaceSearchHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetFaceSearchXAmzTargetEnum;
}


export class GetFaceSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFaceSearchQueryParams;

  @Metadata()
  headers: GetFaceSearchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetFaceSearchRequest;
}


export class GetFaceSearchResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getFaceSearchResponse?: shared.GetFaceSearchResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
