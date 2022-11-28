import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPirateTranslateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class GetPirateTranslateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateTranslateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPirateTranslateQueryParams;

  @SpeakeasyMetadata()
  security: GetPirateTranslateSecurity;
}


export class GetPirateTranslateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
