import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGetSuggestedFollowsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=in_onboarding" })
  inOnboarding?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGetSuggestedFollowsAllRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetSuggestedFollowsAllQueryParams;
}


export class GetGetSuggestedFollowsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
