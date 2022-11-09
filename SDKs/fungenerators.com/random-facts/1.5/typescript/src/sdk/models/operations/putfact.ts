import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutFactQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fact" })
  fact: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subcategory" })
  subcategory: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags: string;
}


export class PutFactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PutFactRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PutFactQueryParams;

  @Metadata()
  security: PutFactSecurity;
}


export class PutFactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
