import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserStoreRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=identity_cookie" })
  identityCookie: number;
}


export class GetUserStoreRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserStoreRecommendationsQueryParams;
}


export class GetUserStoreRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
