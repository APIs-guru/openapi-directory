import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeCreateCallAnalyticsCategory = "Transcribe.CreateCallAnalyticsCategory"
}


export class CreateCallAnalyticsCategoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCallAnalyticsCategoryXAmzTargetEnum;
}


export class CreateCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCallAnalyticsCategoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCallAnalyticsCategoryRequest;
}


export class CreateCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCallAnalyticsCategoryResponse?: shared.CreateCallAnalyticsCategoryResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
