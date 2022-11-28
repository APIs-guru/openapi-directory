import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpacesQueryParams extends SpeakeasyBase {
    numberOfResults?: number;
    timestamp?: Date;
}
export declare class GetSpacesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSpacesRequest extends SpeakeasyBase {
    queryParams: GetSpacesQueryParams;
    security: GetSpacesSecurity;
}
export declare class GetSpacesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getSpacesResult?: any;
    statusCode: number;
}
