import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRiddleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=answer" })
  answer: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=question" })
  question: string;
}


export class PutRiddleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PutRiddleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PutRiddleQueryParams;

  @Metadata()
  security: PutRiddleSecurity;
}


export class PutRiddleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
