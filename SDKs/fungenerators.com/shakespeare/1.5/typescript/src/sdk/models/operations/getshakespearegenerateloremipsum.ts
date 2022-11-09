import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShakespeareGenerateLoremIpsumQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetShakespeareGenerateLoremIpsumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareGenerateLoremIpsumRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetShakespeareGenerateLoremIpsumQueryParams;

  @Metadata()
  security: GetShakespeareGenerateLoremIpsumSecurity;
}


export class GetShakespeareGenerateLoremIpsumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
