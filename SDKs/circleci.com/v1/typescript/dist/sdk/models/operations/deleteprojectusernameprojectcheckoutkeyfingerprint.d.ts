import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams extends SpeakeasyBase {
    fingerprint: string;
    project: string;
    username: string;
}
export declare enum DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum {
    Ok = "OK"
}
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson extends SpeakeasyBase {
    message?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum;
}
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
    pathParams: DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}
export declare class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
    contentType: string;
    deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonObject?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson;
    statusCode: number;
}
