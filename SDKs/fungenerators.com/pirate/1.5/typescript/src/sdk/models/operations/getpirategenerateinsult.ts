import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPirateGenerateInsultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetPirateGenerateInsultSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateGenerateInsultRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPirateGenerateInsultQueryParams;

  @Metadata()
  security: GetPirateGenerateInsultSecurity;
}


export class GetPirateGenerateInsultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
