import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostContentproSimilarTextRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}


export class PostContentproSimilarTextRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostContentproSimilarTextRequestBody;
}


export class PostContentproSimilarText200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=article" })
  article?: shared.Article;

  @Metadata({ data: "json, name=company" })
  company?: shared.ContentProCompany;

  @Metadata({ data: "json, name=snippets" })
  snippets?: shared.ContentProSnippets;
}


export class PostContentproSimilarText200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @Metadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @Metadata({ data: "json, name=data", elemType: operations.PostContentproSimilarText200ApplicationJsonData })
  data?: PostContentproSimilarText200ApplicationJsonData[];

  @Metadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class PostContentproSimilarTextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postContentproSimilarText200ApplicationJsonObject?: PostContentproSimilarText200ApplicationJson;

  @Metadata()
  statusCode: number;
}
