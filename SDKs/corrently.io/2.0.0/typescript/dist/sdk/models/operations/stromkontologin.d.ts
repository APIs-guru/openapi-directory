import { SpeakeasyBase } from "../../../internal/utils";
export declare class StromkontoLoginRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare enum StromkontoLogin200ApplicationJsonStatusEnum {
    Registered = "registered",
    Unregistered = "unregistered"
}
export declare class StromkontoLogin200ApplicationJson extends SpeakeasyBase {
    status?: StromkontoLogin200ApplicationJsonStatusEnum;
}
export declare class StromkontoLoginRequest extends SpeakeasyBase {
    request: StromkontoLoginRequestBody;
}
export declare class StromkontoLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stromkontoLogin200ApplicationJsonObject?: StromkontoLogin200ApplicationJson;
}
