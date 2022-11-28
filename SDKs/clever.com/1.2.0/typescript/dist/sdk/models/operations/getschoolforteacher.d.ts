import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchoolForTeacherPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolForTeacherRequest extends SpeakeasyBase {
    pathParams: GetSchoolForTeacherPathParams;
}
export declare class GetSchoolForTeacherResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolResponse?: shared.SchoolResponse;
    statusCode: number;
}
