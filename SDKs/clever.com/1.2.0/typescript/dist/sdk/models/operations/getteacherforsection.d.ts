import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeacherForSectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTeacherForSectionRequest extends SpeakeasyBase {
    pathParams: GetTeacherForSectionPathParams;
}
export declare class GetTeacherForSectionResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    teacherResponse?: shared.TeacherResponse;
}
