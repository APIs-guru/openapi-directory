import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRiddleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answer" })
  answer: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=question" })
  question: string;
}


export class PostRiddleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PostRiddleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRiddleQueryParams;

  @SpeakeasyMetadata()
  security: PostRiddleSecurity;
}


export class PostRiddleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
