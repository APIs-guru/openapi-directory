import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRiddleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answer" })
  answer: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=question" })
  question: string;
}


export class PutRiddleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PutRiddleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutRiddleQueryParams;

  @SpeakeasyMetadata()
  security: PutRiddleSecurity;
}


export class PutRiddleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
