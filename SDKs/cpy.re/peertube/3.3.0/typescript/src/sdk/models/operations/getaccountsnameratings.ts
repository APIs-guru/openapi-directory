import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsNameRatingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum GetAccountsNameRatingsRatingEnum {
    Like = "like",
    Dislike = "dislike"
}


export class GetAccountsNameRatingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: GetAccountsNameRatingsRatingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetAccountsNameRatingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAccountsNameRatingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsNameRatingsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountsNameRatingsQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountsNameRatingsSecurity;
}


export class GetAccountsNameRatingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoRatings?: any[];
}
