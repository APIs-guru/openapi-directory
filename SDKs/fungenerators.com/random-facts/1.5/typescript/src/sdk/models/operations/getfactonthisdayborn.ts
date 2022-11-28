import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFactOnthisdayBornQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=day" })
  day?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: string;
}


export class GetFactOnthisdayBornSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactOnthisdayBornRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFactOnthisdayBornQueryParams;

  @SpeakeasyMetadata()
  security: GetFactOnthisdayBornSecurity;
}


export class GetFactOnthisdayBornResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
