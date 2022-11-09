import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTextTranslationJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTextTranslationJobsXAmzTargetEnum {
    AwsShineFrontendService20170701ListTextTranslationJobs = "AWSShineFrontendService_20170701.ListTextTranslationJobs"
}


export class ListTextTranslationJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTextTranslationJobsXAmzTargetEnum;
}


export class ListTextTranslationJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTextTranslationJobsQueryParams;

  @Metadata()
  headers: ListTextTranslationJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTextTranslationJobsRequest;
}


export class ListTextTranslationJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidFilterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listTextTranslationJobsResponse?: shared.ListTextTranslationJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
