import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReisezentrenLocLatLonDistPathParams extends SpeakeasyBase {
    dist: number;
    lat: number;
    lon: number;
}
export declare class GetReisezentrenLocLatLonDistRequest extends SpeakeasyBase {
    pathParams: GetReisezentrenLocLatLonDistPathParams;
}
export declare class GetReisezentrenLocLatLonDistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    travelCenter?: shared.TravelCenter;
}
