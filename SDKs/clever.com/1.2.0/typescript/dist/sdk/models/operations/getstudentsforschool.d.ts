import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStudentsForSchoolPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentsForSchoolQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetStudentsForSchoolRequest extends SpeakeasyBase {
    pathParams: GetStudentsForSchoolPathParams;
    queryParams: GetStudentsForSchoolQueryParams;
}
export declare class GetStudentsForSchoolResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentsResponse?: shared.StudentsResponse;
}
