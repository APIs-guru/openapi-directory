import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTransactionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTransactionQueryParams extends SpeakeasyBase {
    includeChargestation?: boolean;
    includeConnector?: boolean;
    includeDriver?: boolean;
    includeEvse?: boolean;
    includeOrganization?: boolean;
    includeRate?: boolean;
    includeReservation?: boolean;
    includeToken?: boolean;
}
export declare class GetTransactionRequest extends SpeakeasyBase {
    pathParams: GetTransactionPathParams;
    queryParams: GetTransactionQueryParams;
}
export declare class GetTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
