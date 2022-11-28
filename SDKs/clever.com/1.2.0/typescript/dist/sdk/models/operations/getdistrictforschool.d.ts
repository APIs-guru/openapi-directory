import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictForSchoolPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictForSchoolRequest extends SpeakeasyBase {
    pathParams: GetDistrictForSchoolPathParams;
}
export declare class GetDistrictForSchoolResponse extends SpeakeasyBase {
    contentType: string;
    districtResponse?: shared.DistrictResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
