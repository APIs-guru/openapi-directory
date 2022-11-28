import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PepMonitorUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PepMonitorUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Webhook;" })
  webhook?: string;
}


export class PepMonitorUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepMonitorUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PepMonitorUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PepMonitorUpdateRequestBody;

  @SpeakeasyMetadata()
  security: PepMonitorUpdateSecurity;
}


export class PepMonitorUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pepMonitorUpdate200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  pepMonitorUpdateDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
