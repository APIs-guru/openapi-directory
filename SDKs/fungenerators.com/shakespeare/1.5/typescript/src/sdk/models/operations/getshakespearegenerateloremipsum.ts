import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShakespeareGenerateLoremIpsumQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetShakespeareGenerateLoremIpsumSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareGenerateLoremIpsumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetShakespeareGenerateLoremIpsumQueryParams;

  @SpeakeasyMetadata()
  security: GetShakespeareGenerateLoremIpsumSecurity;
}


export class GetShakespeareGenerateLoremIpsumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
