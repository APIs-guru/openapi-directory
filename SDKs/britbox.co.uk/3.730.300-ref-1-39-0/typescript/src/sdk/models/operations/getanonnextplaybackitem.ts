import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnonNextPlaybackItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}

export enum GetAnonNextPlaybackItemExpandEnum {
    Parent = "parent"
,    Ancestors = "ancestors"
}


export class GetAnonNextPlaybackItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: GetAnonNextPlaybackItemExpandEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];
}


export class GetAnonNextPlaybackItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnonNextPlaybackItemPathParams;

  @Metadata()
  queryParams: GetAnonNextPlaybackItemQueryParams;
}


export class GetAnonNextPlaybackItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nextPlaybackItem?: shared.NextPlaybackItem;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
