import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewsFeedCardAnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=card_id" })
  cardId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string;
}


export class NewsFeedCardAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: NewsFeedCardAnalyticsQueryParams;
}


export class NewsFeedCardAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
