import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetDistrictRequest extends SpeakeasyBase {
    pathParams: GetDistrictPathParams;
    queryParams: GetDistrictQueryParams;
}
export declare class GetDistrictResponse extends SpeakeasyBase {
    contentType: string;
    districtResponse?: shared.DistrictResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
