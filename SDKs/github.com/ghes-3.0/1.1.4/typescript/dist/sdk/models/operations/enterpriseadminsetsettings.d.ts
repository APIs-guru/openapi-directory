import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminSetSettingsRequestBody extends SpeakeasyBase {
    settings: string;
}
export declare class EnterpriseAdminSetSettingsRequest extends SpeakeasyBase {
    request?: EnterpriseAdminSetSettingsRequestBody;
}
export declare class EnterpriseAdminSetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
