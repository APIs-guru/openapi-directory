import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReisezentrenQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class GetReisezentrenRequest extends SpeakeasyBase {
    queryParams: GetReisezentrenQueryParams;
}
export declare class GetReisezentrenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    travelCenterList?: shared.TravelCenter[];
}
