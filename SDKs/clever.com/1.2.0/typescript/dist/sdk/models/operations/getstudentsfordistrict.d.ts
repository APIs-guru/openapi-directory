import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudentsForDistrictPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentsForDistrictQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetStudentsForDistrictRequest extends SpeakeasyBase {
    pathParams: GetStudentsForDistrictPathParams;
    queryParams: GetStudentsForDistrictQueryParams;
}
export declare class GetStudentsForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentsResponse?: shared.StudentsResponse;
}
