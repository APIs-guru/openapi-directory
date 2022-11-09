import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFactNumbersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetFactNumbersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactNumbersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFactNumbersQueryParams;

  @Metadata()
  security: GetFactNumbersSecurity;
}


export class GetFactNumbersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
