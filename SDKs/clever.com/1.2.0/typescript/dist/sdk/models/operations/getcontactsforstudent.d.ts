import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContactsForStudentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetContactsForStudentQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetContactsForStudentRequest extends SpeakeasyBase {
    pathParams: GetContactsForStudentPathParams;
    queryParams: GetContactsForStudentQueryParams;
}
export declare class GetContactsForStudentResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentContactsForStudentResponse?: shared.StudentContactsForStudentResponse;
}
