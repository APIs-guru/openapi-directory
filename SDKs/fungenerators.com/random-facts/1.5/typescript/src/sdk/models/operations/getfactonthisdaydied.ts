import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFactOnthisdayDiedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=day" })
  day?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: string;
}


export class GetFactOnthisdayDiedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactOnthisdayDiedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFactOnthisdayDiedQueryParams;

  @SpeakeasyMetadata()
  security: GetFactOnthisdayDiedSecurity;
}


export class GetFactOnthisdayDiedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
