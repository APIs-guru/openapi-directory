import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpacesByIdsQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class GetSpacesByIdsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSpacesByIdsRequest extends SpeakeasyBase {
    queryParams: GetSpacesByIdsQueryParams;
    security: GetSpacesByIdsSecurity;
}
export declare class GetSpacesByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getSpacesResult?: any;
    statusCode: number;
}
