import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetEnvironmentPathParams extends SpeakeasyBase {
    environmentName: string;
    owner: string;
    repo: string;
}
export declare class ReposGetEnvironmentRequest extends SpeakeasyBase {
    pathParams: ReposGetEnvironmentPathParams;
}
export declare class ReposGetEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    environment?: shared.Environment;
}
