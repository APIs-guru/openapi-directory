import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEnvironmentPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class UpdateEnvironmentRequests extends SpeakeasyBase {
    updateEnvironmentModel?: shared.UpdateEnvironmentModel;
    updateEnvironmentModel1?: shared.UpdateEnvironmentModel;
    updateEnvironmentModel2?: shared.UpdateEnvironmentModel;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    pathParams: UpdateEnvironmentPathParams;
    request: UpdateEnvironmentRequests;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    environmentModel?: shared.EnvironmentModel;
    environmentModelHaljson?: shared.EnvironmentModelHaljson;
    statusCode: number;
}
