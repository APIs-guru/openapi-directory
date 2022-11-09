import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpaceRepliesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}

export enum GetSpaceRepliesSearchDirectionEnum {
    Before = "BEFORE"
,    After = "AFTER"
}


export class GetSpaceRepliesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchDirection" })
  searchDirection: GetSpaceRepliesSearchDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: Date;
}


export class GetSpaceRepliesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpaceRepliesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpaceRepliesPathParams;

  @Metadata()
  queryParams: GetSpaceRepliesQueryParams;

  @Metadata()
  security: GetSpaceRepliesSecurity;
}


export class GetSpaceRepliesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceReply?: any;

  @Metadata()
  statusCode: number;
}
