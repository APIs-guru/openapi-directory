import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStudentsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetStudentsRequest extends SpeakeasyBase {
    queryParams: GetStudentsQueryParams;
}
export declare class GetStudentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studentsResponse?: shared.StudentsResponse;
}
