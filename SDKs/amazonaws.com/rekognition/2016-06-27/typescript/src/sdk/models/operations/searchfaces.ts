import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchFacesXAmzTargetEnum {
    RekognitionServiceSearchFaces = "RekognitionService.SearchFaces"
}


export class SearchFacesHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchFacesXAmzTargetEnum;
}


export class SearchFacesRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchFacesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchFacesRequest;
}


export class SearchFacesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  searchFacesResponse?: shared.SearchFacesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
