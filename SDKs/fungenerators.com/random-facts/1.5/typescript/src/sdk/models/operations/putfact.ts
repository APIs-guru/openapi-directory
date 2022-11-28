import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutFactQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fact" })
  fact: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subcategory" })
  subcategory: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags: string;
}


export class PutFactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PutFactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutFactQueryParams;

  @SpeakeasyMetadata()
  security: PutFactSecurity;
}


export class PutFactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
