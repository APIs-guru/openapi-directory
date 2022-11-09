import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListSpeechSynthesisTasksStatusEnum {
    Scheduled = "scheduled"
,    InProgress = "inProgress"
,    Completed = "completed"
,    Failed = "failed"
}


export class ListSpeechSynthesisTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: ListSpeechSynthesisTasksStatusEnum;
}


export class ListSpeechSynthesisTasksHeaders extends SpeakeasyBase {
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
}


export class ListSpeechSynthesisTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSpeechSynthesisTasksQueryParams;

  @Metadata()
  headers: ListSpeechSynthesisTasksHeaders;
}


export class ListSpeechSynthesisTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listSpeechSynthesisTasksOutput?: shared.ListSpeechSynthesisTasksOutput;

  @Metadata()
  serviceFailureException?: any;

  @Metadata()
  statusCode: number;
}
