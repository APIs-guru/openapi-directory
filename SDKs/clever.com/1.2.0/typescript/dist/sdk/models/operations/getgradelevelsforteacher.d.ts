import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGradeLevelsForTeacherPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGradeLevelsForTeacherRequest extends SpeakeasyBase {
    pathParams: GetGradeLevelsForTeacherPathParams;
}
export declare class GetGradeLevelsForTeacherResponse extends SpeakeasyBase {
    contentType: string;
    gradeLevelsResponse?: shared.GradeLevelsResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
