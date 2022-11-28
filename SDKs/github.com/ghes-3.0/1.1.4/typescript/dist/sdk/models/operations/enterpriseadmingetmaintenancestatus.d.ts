import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetMaintenanceStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    maintenanceStatus?: shared.MaintenanceStatus;
}
