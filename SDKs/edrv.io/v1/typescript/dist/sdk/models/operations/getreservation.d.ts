import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReservationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetReservationQueryParams extends SpeakeasyBase {
    includeChargestation?: boolean;
    includeOrganization?: boolean;
}
export declare class GetReservationRequest extends SpeakeasyBase {
    pathParams: GetReservationPathParams;
    queryParams: GetReservationQueryParams;
}
export declare class GetReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
