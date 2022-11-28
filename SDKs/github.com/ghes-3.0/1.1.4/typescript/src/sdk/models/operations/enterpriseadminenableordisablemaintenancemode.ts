import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maintenance" })
  maintenance: string;
}


export class EnterpriseAdminEnableOrDisableMaintenanceModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody;
}


export class EnterpriseAdminEnableOrDisableMaintenanceModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  maintenanceStatus?: shared.MaintenanceStatus;
}
