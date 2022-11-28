import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorStatusEnum {
    Error = "error"
}
export declare class Error extends SpeakeasyBase {
    error: string;
    status: ErrorStatusEnum;
}
