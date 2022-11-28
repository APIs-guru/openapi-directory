import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListSpeechSynthesisTasksStatusEnum {
    Scheduled = "scheduled",
    InProgress = "inProgress",
    Completed = "completed",
    Failed = "failed"
}


export class ListSpeechSynthesisTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: ListSpeechSynthesisTasksStatusEnum;
}


export class ListSpeechSynthesisTasksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class ListSpeechSynthesisTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSpeechSynthesisTasksQueryParams;

  @SpeakeasyMetadata()
  headers: ListSpeechSynthesisTasksHeaders;
}


export class ListSpeechSynthesisTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  listSpeechSynthesisTasksOutput?: shared.ListSpeechSynthesisTasksOutput;

  @SpeakeasyMetadata()
  serviceFailureException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
