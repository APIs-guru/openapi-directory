import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSdkKeysPathParams extends SpeakeasyBase {
    configId: string;
    environmentId: string;
}
export declare class GetSdkKeysRequest extends SpeakeasyBase {
    pathParams: GetSdkKeysPathParams;
}
export declare class GetSdkKeysResponse extends SpeakeasyBase {
    contentType: string;
    sdkKeysModel?: shared.SdkKeysModel;
    statusCode: number;
}
