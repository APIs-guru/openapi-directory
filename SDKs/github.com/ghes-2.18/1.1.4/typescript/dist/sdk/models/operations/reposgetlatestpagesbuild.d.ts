import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetLatestPagesBuildPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetLatestPagesBuildRequest extends SpeakeasyBase {
    pathParams: ReposGetLatestPagesBuildPathParams;
}
export declare class ReposGetLatestPagesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pageBuild?: shared.PageBuild;
}
