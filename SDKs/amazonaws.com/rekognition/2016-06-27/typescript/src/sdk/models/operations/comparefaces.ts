import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CompareFacesXAmzTargetEnum {
    RekognitionServiceCompareFaces = "RekognitionService.CompareFaces"
}


export class CompareFacesHeaders extends SpeakeasyBase {
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
  xAmzTarget: CompareFacesXAmzTargetEnum;
}


export class CompareFacesRequest extends SpeakeasyBase {
  @Metadata()
  headers: CompareFacesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CompareFacesRequest;
}


export class CompareFacesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  compareFacesResponse?: shared.CompareFacesResponse;

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
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
