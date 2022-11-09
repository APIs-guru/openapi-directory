import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRiddleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=answer" })
  answer: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=question" })
  question: string;
}


export class PostRiddleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PostRiddleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRiddleQueryParams;

  @Metadata()
  security: PostRiddleSecurity;
}


export class PostRiddleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
