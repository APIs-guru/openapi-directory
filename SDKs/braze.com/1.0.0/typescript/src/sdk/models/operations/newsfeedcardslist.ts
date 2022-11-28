import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewsFeedCardsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_archived" })
  includeArchived?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;
}


export class NewsFeedCardsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: NewsFeedCardsListQueryParams;
}


export class NewsFeedCardsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
