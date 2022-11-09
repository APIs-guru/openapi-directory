import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsFeedCardAnalyticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=card_id" })
  cardId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string;
}


export class NewsFeedCardAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: NewsFeedCardAnalyticsQueryParams;
}


export class NewsFeedCardAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
