import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PepMonitorUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PepMonitorUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=Webhook;" })
  webhook?: string;
}


export class PepMonitorUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepMonitorUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PepMonitorUpdatePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PepMonitorUpdateRequestBody;

  @Metadata()
  security: PepMonitorUpdateSecurity;
}


export class PepMonitorUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pepMonitorUpdate200ApplicationJsonAny?: any;

  @Metadata()
  pepMonitorUpdateDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
