import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretScanningGetAlertPathParams extends SpeakeasyBase {
    alertNumber: number;
    owner: string;
    repo: string;
}
export declare class SecretScanningGetAlert503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningGetAlertRequest extends SpeakeasyBase {
    pathParams: SecretScanningGetAlertPathParams;
}
export declare class SecretScanningGetAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secretScanningAlert?: shared.SecretScanningAlert;
    secretScanningGetAlert503ApplicationJsonObject?: SecretScanningGetAlert503ApplicationJson;
}
