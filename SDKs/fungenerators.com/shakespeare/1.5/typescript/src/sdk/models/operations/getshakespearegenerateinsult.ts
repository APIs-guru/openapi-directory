import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShakespeareGenerateInsultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetShakespeareGenerateInsultSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareGenerateInsultRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetShakespeareGenerateInsultQueryParams;

  @Metadata()
  security: GetShakespeareGenerateInsultSecurity;
}


export class GetShakespeareGenerateInsultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
