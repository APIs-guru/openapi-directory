import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFactNumbersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetFactNumbersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFactNumbersQueryParams;

  @SpeakeasyMetadata()
  security: GetFactNumbersSecurity;
}


export class GetFactNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
