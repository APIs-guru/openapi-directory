import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpaceTopicsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}

export enum GetSpaceTopicsSearchDirectionEnum {
    Before = "BEFORE"
,    After = "AFTER"
}


export class GetSpaceTopicsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchDirection" })
  searchDirection: GetSpaceTopicsSearchDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: Date;
}


export class GetSpaceTopicsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpaceTopicsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpaceTopicsPathParams;

  @Metadata()
  queryParams: GetSpaceTopicsQueryParams;

  @Metadata()
  security: GetSpaceTopicsSecurity;
}


export class GetSpaceTopicsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceTopics?: any[];

  @Metadata()
  statusCode: number;
}
