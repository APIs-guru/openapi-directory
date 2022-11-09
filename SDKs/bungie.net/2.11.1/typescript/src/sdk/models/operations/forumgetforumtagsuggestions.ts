import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetForumTagSuggestionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=partialtag" })
  partialtag?: string;
}


export class ForumGetForumTagSuggestionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ForumGetForumTagSuggestionsQueryParams;
}


export class ForumGetForumTagSuggestionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
