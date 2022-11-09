import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShakespeareGenerateNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=variation" })
  variation?: string;
}


export class GetShakespeareGenerateNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetShakespeareGenerateNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetShakespeareGenerateNameQueryParams;

  @Metadata()
  security: GetShakespeareGenerateNameSecurity;
}


export class GetShakespeareGenerateNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
