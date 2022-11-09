import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPirateGenerateNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=variation" })
  variation?: string;
}


export class GetPirateGenerateNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetPirateGenerateNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPirateGenerateNameQueryParams;

  @Metadata()
  security: GetPirateGenerateNameSecurity;
}


export class GetPirateGenerateNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
