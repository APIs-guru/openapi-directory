import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFactOnthisdayDiedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=day" })
  day?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: string;
}


export class GetFactOnthisdayDiedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetFactOnthisdayDiedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFactOnthisdayDiedQueryParams;

  @Metadata()
  security: GetFactOnthisdayDiedSecurity;
}


export class GetFactOnthisdayDiedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
