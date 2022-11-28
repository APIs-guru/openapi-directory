import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetConfigurationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    configurationStatus?: shared.ConfigurationStatus;
}
