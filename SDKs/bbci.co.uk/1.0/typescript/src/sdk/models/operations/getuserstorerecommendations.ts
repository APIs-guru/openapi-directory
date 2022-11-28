import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserStoreRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identity_cookie" })
  identityCookie: number;
}


export class GetUserStoreRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserStoreRecommendationsQueryParams;
}


export class GetUserStoreRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
