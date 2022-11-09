import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPirateGenerateLoremIpsumQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetPirateGenerateLoremIpsumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateGenerateLoremIpsumRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPirateGenerateLoremIpsumQueryParams;

  @Metadata()
  security: GetPirateGenerateLoremIpsumSecurity;
}


export class GetPirateGenerateLoremIpsumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
