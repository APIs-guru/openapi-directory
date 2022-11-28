import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDeleteAnEnvironmentPathParams extends SpeakeasyBase {
    environmentName: string;
    owner: string;
    repo: string;
}
export declare class ReposDeleteAnEnvironmentRequest extends SpeakeasyBase {
    pathParams: ReposDeleteAnEnvironmentPathParams;
}
export declare class ReposDeleteAnEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
