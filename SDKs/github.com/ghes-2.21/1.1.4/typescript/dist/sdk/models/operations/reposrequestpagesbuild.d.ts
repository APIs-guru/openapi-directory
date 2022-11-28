import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposRequestPagesBuildPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposRequestPagesBuildRequest extends SpeakeasyBase {
    pathParams: ReposRequestPagesBuildPathParams;
}
export declare class ReposRequestPagesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pageBuildStatus?: shared.PageBuildStatus;
}
