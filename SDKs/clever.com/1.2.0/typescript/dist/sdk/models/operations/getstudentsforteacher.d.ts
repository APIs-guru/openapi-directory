import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStudentsForTeacherPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentsForTeacherQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetStudentsForTeacherRequest extends SpeakeasyBase {
    pathParams: GetStudentsForTeacherPathParams;
    queryParams: GetStudentsForTeacherQueryParams;
}
export declare class GetStudentsForTeacherResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentsResponse?: shared.StudentsResponse;
}
