import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChargeStationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetChargeStationQueryParams extends SpeakeasyBase {
    includeEvses?: boolean;
    includeLocation?: boolean;
    includeOrganization?: boolean;
}
export declare class GetChargeStationRequest extends SpeakeasyBase {
    pathParams: GetChargeStationPathParams;
    queryParams: GetChargeStationQueryParams;
}
export declare class GetChargeStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
