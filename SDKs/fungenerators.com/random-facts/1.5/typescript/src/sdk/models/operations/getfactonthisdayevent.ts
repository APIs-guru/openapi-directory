import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFactOnthisdayEventQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=day" })
  day?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: string;
}


export class GetFactOnthisdayEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactOnthisdayEventRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFactOnthisdayEventQueryParams;

  @Metadata()
  security: GetFactOnthisdayEventSecurity;
}


export class GetFactOnthisdayEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
