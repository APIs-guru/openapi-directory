import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeDeleteCallAnalyticsCategory = "Transcribe.DeleteCallAnalyticsCategory"
}


export class DeleteCallAnalyticsCategoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCallAnalyticsCategoryXAmzTargetEnum;
}


export class DeleteCallAnalyticsCategoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteCallAnalyticsCategoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCallAnalyticsCategoryRequest;
}


export class DeleteCallAnalyticsCategoryResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteCallAnalyticsCategoryResponse?: Map<string, any>;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
