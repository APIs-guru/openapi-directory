import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchFacesByImageXAmzTargetEnum {
    RekognitionServiceSearchFacesByImage = "RekognitionService.SearchFacesByImage"
}


export class SearchFacesByImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchFacesByImageXAmzTargetEnum;
}


export class SearchFacesByImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchFacesByImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchFacesByImageRequest;
}


export class SearchFacesByImageResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  imageTooLargeException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidImageFormatException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidS3ObjectException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  searchFacesByImageResponse?: shared.SearchFacesByImageResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
