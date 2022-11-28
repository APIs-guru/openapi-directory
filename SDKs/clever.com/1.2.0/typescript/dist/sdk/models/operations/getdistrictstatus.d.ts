import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictStatusPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictStatusRequest extends SpeakeasyBase {
    pathParams: GetDistrictStatusPathParams;
}
export declare class GetDistrictStatusResponse extends SpeakeasyBase {
    contentType: string;
    districtStatusResponses?: shared.DistrictStatusResponses;
    notFound?: shared.NotFound;
    statusCode: number;
}
