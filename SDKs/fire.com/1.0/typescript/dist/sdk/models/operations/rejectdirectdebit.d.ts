import { SpeakeasyBase } from "../../../internal/utils";
export declare class RejectDirectDebitPathParams extends SpeakeasyBase {
    directDebitUuid: string;
}
export declare class RejectDirectDebitRequest extends SpeakeasyBase {
    pathParams: RejectDirectDebitPathParams;
}
export declare class RejectDirectDebitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
