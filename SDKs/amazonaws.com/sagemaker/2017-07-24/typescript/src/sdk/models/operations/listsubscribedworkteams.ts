import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSubscribedWorkteamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListSubscribedWorkteamsXAmzTargetEnum {
    SageMakerListSubscribedWorkteams = "SageMaker.ListSubscribedWorkteams"
}


export class ListSubscribedWorkteamsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListSubscribedWorkteamsXAmzTargetEnum;
}


export class ListSubscribedWorkteamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSubscribedWorkteamsQueryParams;

  @Metadata()
  headers: ListSubscribedWorkteamsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSubscribedWorkteamsRequest;
}


export class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSubscribedWorkteamsResponse?: shared.ListSubscribedWorkteamsResponse;

  @Metadata()
  statusCode: number;
}
