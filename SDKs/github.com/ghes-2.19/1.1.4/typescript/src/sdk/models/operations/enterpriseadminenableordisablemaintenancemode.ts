import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maintenance" })
  maintenance: string;
}


export class EnterpriseAdminEnableOrDisableMaintenanceModeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody;
}


export class EnterpriseAdminEnableOrDisableMaintenanceModeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  maintenanceStatus?: shared.MaintenanceStatus;
}
