import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPirateGenerateNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variation" })
  variation?: string;
}


export class GetPirateGenerateNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateGenerateNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPirateGenerateNameQueryParams;

  @SpeakeasyMetadata()
  security: GetPirateGenerateNameSecurity;
}


export class GetPirateGenerateNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
