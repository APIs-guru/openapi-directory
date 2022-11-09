import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFlaggedItemsSearchDirectionEnum {
    Before = "BEFORE"
,    After = "AFTER"
}


export class GetFlaggedItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchDirection" })
  searchDirection: GetFlaggedItemsSearchDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: Date;
}


export class GetFlaggedItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFlaggedItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFlaggedItemsQueryParams;

  @Metadata()
  security: GetFlaggedItemsSecurity;
}


export class GetFlaggedItemsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  flaggedItemsResult?: any;

  @Metadata()
  statusCode: number;
}
