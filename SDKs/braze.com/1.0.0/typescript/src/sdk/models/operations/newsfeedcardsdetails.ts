import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewsFeedCardsDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=card_id" })
  cardId?: string;
}


export class NewsFeedCardsDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: NewsFeedCardsDetailsQueryParams;
}


export class NewsFeedCardsDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
