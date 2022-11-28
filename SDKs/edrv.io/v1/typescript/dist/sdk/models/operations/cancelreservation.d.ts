import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelreservationRequestBody extends SpeakeasyBase {
    reservation?: string;
}
export declare class Cancelreservation201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Map<string, any>;
}
export declare class CancelreservationRequest extends SpeakeasyBase {
    request: CancelreservationRequestBody;
}
export declare class CancelreservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cancelreservation201ApplicationJsonObject?: Cancelreservation201ApplicationJson;
}
