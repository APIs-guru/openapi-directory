import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpaceRepliesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}

export enum GetSpaceRepliesSearchDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}


export class GetSpaceRepliesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchDirection" })
  searchDirection: GetSpaceRepliesSearchDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: Date;
}


export class GetSpaceRepliesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpaceRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpaceRepliesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSpaceRepliesQueryParams;

  @SpeakeasyMetadata()
  security: GetSpaceRepliesSecurity;
}


export class GetSpaceRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceReply?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
