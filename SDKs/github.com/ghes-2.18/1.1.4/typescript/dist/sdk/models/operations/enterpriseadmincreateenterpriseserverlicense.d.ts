import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody extends SpeakeasyBase {
    license: string;
    password?: string;
    settings?: string;
}
export declare class EnterpriseAdminCreateEnterpriseServerLicenseRequest extends SpeakeasyBase {
    request?: EnterpriseAdminCreateEnterpriseServerLicenseRequestBody;
}
export declare class EnterpriseAdminCreateEnterpriseServerLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
