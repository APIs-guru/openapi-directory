import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSDKKeysPathParams extends SpeakeasyBase {
    configId: string;
    environmentId: string;
}
export declare class GetSDKKeysRequest extends SpeakeasyBase {
    pathParams: GetSDKKeysPathParams;
}
export declare class GetSDKKeysResponse extends SpeakeasyBase {
    contentType: string;
    sdkKeysModel?: shared.SDKKeysModel;
    statusCode: number;
}
