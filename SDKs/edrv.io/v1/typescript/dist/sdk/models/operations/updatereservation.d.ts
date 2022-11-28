import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatereservationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatereservationRequestBody extends SpeakeasyBase {
    connector?: number;
    driver?: string;
    endDate?: string;
    evse?: number;
}
export declare class Updatereservation201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Map<string, any>;
}
export declare class UpdatereservationRequest extends SpeakeasyBase {
    pathParams: UpdatereservationPathParams;
    request: UpdatereservationRequestBody;
}
export declare class UpdatereservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatereservation201ApplicationJsonObject?: Updatereservation201ApplicationJson;
}
