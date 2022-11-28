import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetPagesBuildPathParams extends SpeakeasyBase {
    buildId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetPagesBuildRequest extends SpeakeasyBase {
    pathParams: ReposGetPagesBuildPathParams;
}
export declare class ReposGetPagesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pageBuild?: shared.PageBuild;
}
