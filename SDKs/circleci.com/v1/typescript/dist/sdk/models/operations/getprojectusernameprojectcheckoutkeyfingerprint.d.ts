import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectCheckoutKeyFingerprintPathParams extends SpeakeasyBase {
    fingerprint: string;
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}
export declare class GetProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
    contentType: string;
    key?: shared.Key;
    statusCode: number;
}
