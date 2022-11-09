import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PepMonitorListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepMonitorListRequest extends SpeakeasyBase {
  @Metadata()
  security: PepMonitorListSecurity;
}


export class PepMonitorListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pepMonitorList200ApplicationJsonAnies?: any[];

  @Metadata()
  pepMonitorListDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
