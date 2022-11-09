import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPirateTranslateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class GetPirateTranslateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateTranslateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPirateTranslateQueryParams;

  @Metadata()
  security: GetPirateTranslateSecurity;
}


export class GetPirateTranslateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
