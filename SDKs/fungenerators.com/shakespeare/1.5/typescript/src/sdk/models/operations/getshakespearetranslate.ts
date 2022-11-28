import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShakespeareTranslateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class GetShakespeareTranslateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareTranslateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetShakespeareTranslateQueryParams;

  @SpeakeasyMetadata()
  security: GetShakespeareTranslateSecurity;
}


export class GetShakespeareTranslateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
