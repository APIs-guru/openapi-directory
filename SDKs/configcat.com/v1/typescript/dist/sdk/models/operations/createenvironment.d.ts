import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEnvironmentPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class CreateEnvironmentRequests extends SpeakeasyBase {
    createEnvironmentModel?: shared.CreateEnvironmentModel;
    createEnvironmentModel1?: shared.CreateEnvironmentModel;
    createEnvironmentModel2?: shared.CreateEnvironmentModel;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    pathParams: CreateEnvironmentPathParams;
    request: CreateEnvironmentRequests;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    environmentModel?: shared.EnvironmentModel;
    environmentModelHaljson?: shared.EnvironmentModelHaljson;
    statusCode: number;
}
