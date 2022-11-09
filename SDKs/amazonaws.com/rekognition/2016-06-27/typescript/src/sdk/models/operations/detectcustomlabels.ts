import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetectCustomLabelsXAmzTargetEnum {
    RekognitionServiceDetectCustomLabels = "RekognitionService.DetectCustomLabels"
}


export class DetectCustomLabelsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetectCustomLabelsXAmzTargetEnum;
}


export class DetectCustomLabelsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetectCustomLabelsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetectCustomLabelsRequest;
}


export class DetectCustomLabelsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  detectCustomLabelsResponse?: shared.DetectCustomLabelsResponse;

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
  limitExceededException?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  resourceNotReadyException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
