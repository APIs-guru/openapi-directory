import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartReportCreationXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126StartReportCreation = "ResourceGroupsTaggingAPI_20170126.StartReportCreation"
}


export class StartReportCreationHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartReportCreationXAmzTargetEnum;
}


export class StartReportCreationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartReportCreationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartReportCreationInput;
}


export class StartReportCreationResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  startReportCreationOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
