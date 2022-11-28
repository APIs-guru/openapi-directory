import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetForumTagSuggestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partialtag" })
  partialtag?: string;
}


export class ForumGetForumTagSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ForumGetForumTagSuggestionsQueryParams;
}


export class ForumGetForumTagSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
