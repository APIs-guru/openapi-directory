import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEventTrackersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListEventTrackersXAmzTargetEnum {
    AmazonPersonalizeListEventTrackers = "AmazonPersonalize.ListEventTrackers"
}


export class ListEventTrackersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListEventTrackersXAmzTargetEnum;
}


export class ListEventTrackersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEventTrackersQueryParams;

  @Metadata()
  headers: ListEventTrackersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListEventTrackersRequest;
}


export class ListEventTrackersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listEventTrackersResponse?: shared.ListEventTrackersResponse;

  @Metadata()
  statusCode: number;
}
