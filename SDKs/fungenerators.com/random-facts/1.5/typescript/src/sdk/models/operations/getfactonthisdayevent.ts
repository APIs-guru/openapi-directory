import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFactOnthisdayEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=day" })
  day?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: string;
}


export class GetFactOnthisdayEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactOnthisdayEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFactOnthisdayEventQueryParams;

  @SpeakeasyMetadata()
  security: GetFactOnthisdayEventSecurity;
}


export class GetFactOnthisdayEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
