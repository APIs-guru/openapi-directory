import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsNameRatingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum GetAccountsNameRatingsRatingEnum {
    Like = "like"
,    Dislike = "dislike"
}


export class GetAccountsNameRatingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: GetAccountsNameRatingsRatingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetAccountsNameRatingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAccountsNameRatingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsNameRatingsPathParams;

  @Metadata()
  queryParams: GetAccountsNameRatingsQueryParams;

  @Metadata()
  security: GetAccountsNameRatingsSecurity;
}


export class GetAccountsNameRatingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoRatings?: any[];
}
