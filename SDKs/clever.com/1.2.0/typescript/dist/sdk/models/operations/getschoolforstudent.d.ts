import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSchoolForStudentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolForStudentRequest extends SpeakeasyBase {
    pathParams: GetSchoolForStudentPathParams;
}
export declare class GetSchoolForStudentResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolResponse?: shared.SchoolResponse;
    statusCode: number;
}
