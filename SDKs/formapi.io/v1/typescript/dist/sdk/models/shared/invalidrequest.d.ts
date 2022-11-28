import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvalidRequestStatusEnum {
    Error = "error"
}
export declare class InvalidRequest extends SpeakeasyBase {
    errors: string[];
    status: InvalidRequestStatusEnum;
}
