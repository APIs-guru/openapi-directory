import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PepMonitorUnregisterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PepMonitorUnregisterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepMonitorUnregisterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PepMonitorUnregisterPathParams;

  @Metadata()
  security: PepMonitorUnregisterSecurity;
}


export class PepMonitorUnregisterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pepMonitorUnregister200ApplicationJsonAny?: any;

  @Metadata()
  pepMonitorUnregisterDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
