import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeachersForStudentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTeachersForStudentQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetTeachersForStudentRequest extends SpeakeasyBase {
    pathParams: GetTeachersForStudentPathParams;
    queryParams: GetTeachersForStudentQueryParams;
}
export declare class GetTeachersForStudentResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    teachersResponse?: shared.TeachersResponse;
}
