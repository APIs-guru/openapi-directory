import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchDriverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchDriverRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    streetAndNumber?: string;
}
export declare class PatchDriverRequestBodyPhone extends SpeakeasyBase {
    home?: string;
    mobile?: string;
    work?: string;
}
export declare class PatchDriverRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PatchDriverRequestBodyAddress;
    email?: string;
    firstname?: string;
    lastname?: string;
    phone?: PatchDriverRequestBodyPhone;
    source?: string;
    tokens?: any[];
}
export declare class PatchDriver200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PatchDriverRequest extends SpeakeasyBase {
    pathParams: PatchDriverPathParams;
    request: PatchDriverRequestBody;
}
export declare class PatchDriverResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchDriver200ApplicationJsonObject?: PatchDriver200ApplicationJson;
}
