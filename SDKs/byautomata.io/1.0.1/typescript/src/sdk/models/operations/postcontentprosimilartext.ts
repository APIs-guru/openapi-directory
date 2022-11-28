import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostContentproSimilarTextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}


export class PostContentproSimilarText200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=article" })
  article?: shared.Article;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: shared.ContentProCompany;

  @SpeakeasyMetadata({ data: "json, name=snippets" })
  snippets?: shared.ContentProSnippets;
}


export class PostContentproSimilarText200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls_per_month" })
  callsPerMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=count_remaining" })
  countRemaining?: string;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: PostContentproSimilarText200ApplicationJsonData })
  data?: PostContentproSimilarText200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=renewal_date" })
  renewalDate?: string;
}


export class PostContentproSimilarTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostContentproSimilarTextRequestBody;
}


export class PostContentproSimilarTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postContentproSimilarText200ApplicationJsonObject?: PostContentproSimilarText200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
