import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetInfoTldZonePathParams extends SpeakeasyBase {
    zone: string;
}
export declare class GetInfoTldZoneQueryParams extends SpeakeasyBase {
    limit?: number;
    page?: string;
}
export declare class GetInfoTldZoneRequest extends SpeakeasyBase {
    pathParams: GetInfoTldZonePathParams;
    queryParams: GetInfoTldZoneQueryParams;
}
export declare class GetInfoTldZoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    zoneInfo?: shared.ZoneInfo;
}
