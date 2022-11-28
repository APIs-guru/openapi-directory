import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPirateGenerateInsultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetPirateGenerateInsultSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateGenerateInsultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPirateGenerateInsultQueryParams;

  @SpeakeasyMetadata()
  security: GetPirateGenerateInsultSecurity;
}


export class GetPirateGenerateInsultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
