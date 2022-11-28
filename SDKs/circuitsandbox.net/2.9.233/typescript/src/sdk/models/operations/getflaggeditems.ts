import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFlaggedItemsSearchDirectionEnum {
    Before = "BEFORE",
    After = "AFTER"
}


export class GetFlaggedItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchDirection" })
  searchDirection: GetFlaggedItemsSearchDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: Date;
}


export class GetFlaggedItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFlaggedItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFlaggedItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetFlaggedItemsSecurity;
}


export class GetFlaggedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flaggedItemsResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
