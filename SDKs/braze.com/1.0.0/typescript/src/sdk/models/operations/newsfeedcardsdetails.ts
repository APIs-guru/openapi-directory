import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsFeedCardsDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=card_id" })
  cardId?: string;
}


export class NewsFeedCardsDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: NewsFeedCardsDetailsQueryParams;
}


export class NewsFeedCardsDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
