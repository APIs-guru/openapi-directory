import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShakespeareGenerateNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variation" })
  variation?: string;
}


export class GetShakespeareGenerateNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareGenerateNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetShakespeareGenerateNameQueryParams;

  @SpeakeasyMetadata()
  security: GetShakespeareGenerateNameSecurity;
}


export class GetShakespeareGenerateNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
