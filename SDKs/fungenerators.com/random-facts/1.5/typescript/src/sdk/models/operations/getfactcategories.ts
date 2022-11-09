import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFactCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetFactCategoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFactCategoriesQueryParams;

  @Metadata()
  security: GetFactCategoriesSecurity;
}


export class GetFactCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
