import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTrialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTrialsXAmzTargetEnum {
    SageMakerListTrials = "SageMaker.ListTrials"
}


export class ListTrialsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTrialsXAmzTargetEnum;
}


export class ListTrialsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTrialsQueryParams;

  @Metadata()
  headers: ListTrialsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTrialsRequest;
}


export class ListTrialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrialsResponse?: shared.ListTrialsResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
