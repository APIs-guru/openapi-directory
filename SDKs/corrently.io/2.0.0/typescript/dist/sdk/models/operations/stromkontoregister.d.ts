import { SpeakeasyBase } from "../../../internal/utils";
export declare class StromkontoRegisterRequestBody extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    zipcode?: string;
}
export declare class StromkontoRegisterRequest extends SpeakeasyBase {
    request: StromkontoRegisterRequestBody;
}
export declare class StromkontoRegisterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
