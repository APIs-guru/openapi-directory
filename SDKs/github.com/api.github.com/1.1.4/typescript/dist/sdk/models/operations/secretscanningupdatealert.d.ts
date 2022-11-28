import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretScanningUpdateAlertPathParams extends SpeakeasyBase {
    alertNumber: number;
    owner: string;
    repo: string;
}
export declare class SecretScanningUpdateAlertRequestBody extends SpeakeasyBase {
    resolution?: string;
    state: shared.SecretScanningAlertStateEnum;
}
export declare class SecretScanningUpdateAlert503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningUpdateAlertRequest extends SpeakeasyBase {
    pathParams: SecretScanningUpdateAlertPathParams;
    request?: SecretScanningUpdateAlertRequestBody;
}
export declare class SecretScanningUpdateAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secretScanningAlert?: shared.SecretScanningAlert;
    secretScanningUpdateAlert503ApplicationJsonObject?: SecretScanningUpdateAlert503ApplicationJson;
}
