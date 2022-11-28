import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectBuildNumTestsPathParams extends SpeakeasyBase {
    buildNum: number;
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectBuildNumTestsRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectBuildNumTestsPathParams;
}
export declare class GetProjectUsernameProjectBuildNumTestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tests?: shared.Tests;
}
