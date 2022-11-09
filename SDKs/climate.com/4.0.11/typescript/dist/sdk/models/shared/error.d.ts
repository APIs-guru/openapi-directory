import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ErrorError extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
export declare class Error extends SpeakeasyBase {
    error?: ErrorError;
}
