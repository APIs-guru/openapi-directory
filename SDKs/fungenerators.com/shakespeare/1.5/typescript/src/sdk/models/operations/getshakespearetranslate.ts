import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShakespeareTranslateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class GetShakespeareTranslateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareTranslateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetShakespeareTranslateQueryParams;

  @Metadata()
  security: GetShakespeareTranslateSecurity;
}


export class GetShakespeareTranslateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
