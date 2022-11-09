import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNextPlaybackItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}

export enum GetNextPlaybackItemExpandEnum {
    Parent = "parent"
,    Ancestors = "ancestors"
}


export class GetNextPlaybackItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: GetNextPlaybackItemExpandEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;
}


export class GetNextPlaybackItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetNextPlaybackItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNextPlaybackItemPathParams;

  @Metadata()
  queryParams: GetNextPlaybackItemQueryParams;

  @Metadata()
  security: GetNextPlaybackItemSecurity;
}


export class GetNextPlaybackItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nextPlaybackItem?: shared.NextPlaybackItem;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
