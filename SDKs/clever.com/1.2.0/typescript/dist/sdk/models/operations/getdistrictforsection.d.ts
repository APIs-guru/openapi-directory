import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistrictForSectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictForSectionRequest extends SpeakeasyBase {
    pathParams: GetDistrictForSectionPathParams;
}
export declare class GetDistrictForSectionResponse extends SpeakeasyBase {
    contentType: string;
    districtResponse?: shared.DistrictResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
