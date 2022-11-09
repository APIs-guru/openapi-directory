import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSchoolsForDistrictPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolsForDistrictQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSchoolsForDistrictRequest extends SpeakeasyBase {
    pathParams: GetSchoolsForDistrictPathParams;
    queryParams: GetSchoolsForDistrictQueryParams;
}
export declare class GetSchoolsForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolsResponse?: shared.SchoolsResponse;
    statusCode: number;
}
