import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCandidatesForAutoMlJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCandidatesForAutoMlJobXAmzTargetEnum {
    SageMakerListCandidatesForAutoMlJob = "SageMaker.ListCandidatesForAutoMLJob"
}


export class ListCandidatesForAutoMlJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCandidatesForAutoMlJobXAmzTargetEnum;
}


export class ListCandidatesForAutoMlJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCandidatesForAutoMlJobQueryParams;

  @Metadata()
  headers: ListCandidatesForAutoMlJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCandidatesForAutoMlJobRequest;
}


export class ListCandidatesForAutoMlJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCandidatesForAutoMlJobResponse?: shared.ListCandidatesForAutoMlJobResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
