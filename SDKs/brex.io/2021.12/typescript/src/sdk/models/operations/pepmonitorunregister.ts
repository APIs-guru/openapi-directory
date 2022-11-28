import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PepMonitorUnregisterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PepMonitorUnregisterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepMonitorUnregisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PepMonitorUnregisterPathParams;

  @SpeakeasyMetadata()
  security: PepMonitorUnregisterSecurity;
}


export class PepMonitorUnregisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pepMonitorUnregister200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  pepMonitorUnregisterDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
