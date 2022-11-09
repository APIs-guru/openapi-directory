import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsFeedCardsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_archived" })
  includeArchived?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;
}


export class NewsFeedCardsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: NewsFeedCardsListQueryParams;
}


export class NewsFeedCardsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
