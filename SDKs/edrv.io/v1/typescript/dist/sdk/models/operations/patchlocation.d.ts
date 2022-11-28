import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchLocationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchLocationRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    state?: string;
    streetAndNumber?: string;
}
export declare class PatchLocationRequestBodyCoordinates extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
export declare class PatchLocationRequestBodyOpeningHours0 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours1 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours2 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours3 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours4 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours5 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours6 extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class PatchLocationRequestBodyOpeningHours extends SpeakeasyBase {
    zero?: PatchLocationRequestBodyOpeningHours0[];
    one?: PatchLocationRequestBodyOpeningHours1[];
    two?: PatchLocationRequestBodyOpeningHours2[];
    three?: PatchLocationRequestBodyOpeningHours3[];
    four?: PatchLocationRequestBodyOpeningHours4[];
    five?: PatchLocationRequestBodyOpeningHours5[];
    six?: PatchLocationRequestBodyOpeningHours6[];
}
export declare class PatchLocationRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PatchLocationRequestBodyAddress;
    chargestations?: any[];
    coordinates?: PatchLocationRequestBodyCoordinates;
    openingHours?: PatchLocationRequestBodyOpeningHours;
    operatorName?: string;
    timezone?: string;
}
export declare class PatchLocation200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PatchLocationRequest extends SpeakeasyBase {
    pathParams: PatchLocationPathParams;
    request: PatchLocationRequestBody;
}
export declare class PatchLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchLocation200ApplicationJsonObject?: PatchLocation200ApplicationJson;
}
