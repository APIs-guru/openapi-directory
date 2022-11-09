import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSchoolAdminsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSchoolAdminsRequest extends SpeakeasyBase {
    queryParams: GetSchoolAdminsQueryParams;
}
export declare class GetSchoolAdminsResponse extends SpeakeasyBase {
    contentType: string;
    schoolAdminsResponse?: shared.SchoolAdminsResponse;
    statusCode: number;
}
