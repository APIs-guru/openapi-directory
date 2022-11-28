import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetStudentRequest extends SpeakeasyBase {
    pathParams: GetStudentPathParams;
    queryParams: GetStudentQueryParams;
}
export declare class GetStudentResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentResponse?: shared.StudentResponse;
}
