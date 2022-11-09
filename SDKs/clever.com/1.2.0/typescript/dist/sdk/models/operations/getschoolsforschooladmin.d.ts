import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSchoolsForSchoolAdminPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolsForSchoolAdminQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetSchoolsForSchoolAdminRequest extends SpeakeasyBase {
    pathParams: GetSchoolsForSchoolAdminPathParams;
    queryParams: GetSchoolsForSchoolAdminQueryParams;
}
export declare class GetSchoolsForSchoolAdminResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolsResponse?: shared.SchoolsResponse;
    statusCode: number;
}
