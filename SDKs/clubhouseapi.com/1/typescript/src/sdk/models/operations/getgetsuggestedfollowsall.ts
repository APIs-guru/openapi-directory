import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGetSuggestedFollowsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=in_onboarding" })
  inOnboarding?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGetSuggestedFollowsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetSuggestedFollowsAllQueryParams;
}


export class GetGetSuggestedFollowsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
