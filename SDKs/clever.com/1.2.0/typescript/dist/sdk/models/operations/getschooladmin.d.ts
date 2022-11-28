import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchoolAdminPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolAdminQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetSchoolAdminRequest extends SpeakeasyBase {
    pathParams: GetSchoolAdminPathParams;
    queryParams: GetSchoolAdminQueryParams;
}
export declare class GetSchoolAdminResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolAdminResponse?: shared.SchoolAdminResponse;
    statusCode: number;
}
