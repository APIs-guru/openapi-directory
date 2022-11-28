import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody extends SpeakeasyBase {
    maintenance: string;
}
export declare class EnterpriseAdminEnableOrDisableMaintenanceModeRequest extends SpeakeasyBase {
    request?: EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody;
}
export declare class EnterpriseAdminEnableOrDisableMaintenanceModeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    maintenanceStatus?: shared.MaintenanceStatus;
}
