import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectBuildNumPathParams extends SpeakeasyBase {
    buildNum: number;
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectBuildNumRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectBuildNumPathParams;
}
export declare class GetProjectUsernameProjectBuildNumResponse extends SpeakeasyBase {
    buildDetail?: shared.BuildDetail;
    contentType: string;
    statusCode: number;
}
