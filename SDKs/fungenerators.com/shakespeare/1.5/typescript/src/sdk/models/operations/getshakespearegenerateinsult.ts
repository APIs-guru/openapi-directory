import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShakespeareGenerateInsultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetShakespeareGenerateInsultSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareGenerateInsultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetShakespeareGenerateInsultQueryParams;

  @SpeakeasyMetadata()
  security: GetShakespeareGenerateInsultSecurity;
}


export class GetShakespeareGenerateInsultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
