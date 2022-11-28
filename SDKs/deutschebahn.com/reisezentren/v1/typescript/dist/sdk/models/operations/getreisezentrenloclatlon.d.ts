import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReisezentrenLocLatLonPathParams extends SpeakeasyBase {
    lat: number;
    lon: number;
}
export declare class GetReisezentrenLocLatLonRequest extends SpeakeasyBase {
    pathParams: GetReisezentrenLocLatLonPathParams;
}
export declare class GetReisezentrenLocLatLonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    travelCenter?: shared.TravelCenter;
}
