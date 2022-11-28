import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchoolsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSchoolsRequest extends SpeakeasyBase {
    queryParams: GetSchoolsQueryParams;
}
export declare class GetSchoolsResponse extends SpeakeasyBase {
    contentType: string;
    schoolsResponse?: shared.SchoolsResponse;
    statusCode: number;
}
