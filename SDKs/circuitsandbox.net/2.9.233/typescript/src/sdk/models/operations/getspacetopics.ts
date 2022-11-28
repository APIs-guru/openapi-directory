import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpaceTopicsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}

export enum GetSpaceTopicsSearchDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}


export class GetSpaceTopicsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchDirection" })
  searchDirection: GetSpaceTopicsSearchDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: Date;
}


export class GetSpaceTopicsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpaceTopicsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpaceTopicsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSpaceTopicsQueryParams;

  @SpeakeasyMetadata()
  security: GetSpaceTopicsSecurity;
}


export class GetSpaceTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceTopics?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
