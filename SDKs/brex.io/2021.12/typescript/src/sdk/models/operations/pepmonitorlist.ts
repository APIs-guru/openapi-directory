import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PepMonitorListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class PepMonitorListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PepMonitorListSecurity;
}


export class PepMonitorListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pepMonitorList200ApplicationJsonAnies?: any[];

  @SpeakeasyMetadata()
  pepMonitorListDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
