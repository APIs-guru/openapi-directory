import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnonNextPlaybackItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}

export enum GetAnonNextPlaybackItemExpandEnum {
    Parent = "parent",
    Ancestors = "ancestors"
}


export class GetAnonNextPlaybackItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: GetAnonNextPlaybackItemExpandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];
}


export class GetAnonNextPlaybackItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnonNextPlaybackItemPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnonNextPlaybackItemQueryParams;
}


export class GetAnonNextPlaybackItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nextPlaybackItem?: shared.NextPlaybackItem;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
