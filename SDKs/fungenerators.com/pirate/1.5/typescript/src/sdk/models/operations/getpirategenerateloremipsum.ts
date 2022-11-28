import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPirateGenerateLoremIpsumQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetPirateGenerateLoremIpsumSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateGenerateLoremIpsumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPirateGenerateLoremIpsumQueryParams;

  @SpeakeasyMetadata()
  security: GetPirateGenerateLoremIpsumSecurity;
}


export class GetPirateGenerateLoremIpsumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
