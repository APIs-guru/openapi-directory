import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStudentForContactPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentForContactRequest extends SpeakeasyBase {
    pathParams: GetStudentForContactPathParams;
}
export declare class GetStudentForContactResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentResponse?: shared.StudentResponse;
}
