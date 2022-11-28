import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeacherPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTeacherQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetTeacherRequest extends SpeakeasyBase {
    pathParams: GetTeacherPathParams;
    queryParams: GetTeacherQueryParams;
}
export declare class GetTeacherResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    teacherResponse?: shared.TeacherResponse;
}
