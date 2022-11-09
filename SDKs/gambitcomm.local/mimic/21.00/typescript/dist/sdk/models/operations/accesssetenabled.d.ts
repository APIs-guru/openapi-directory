import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccessSetEnabledPathParams extends SpeakeasyBase {
    enabledOrNot: string;
}
export declare class AccessSetEnabledRequest extends SpeakeasyBase {
    pathParams: AccessSetEnabledPathParams;
}
export declare class AccessSetEnabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessSetEnabled200ApplicationJsonString?: string;
}
