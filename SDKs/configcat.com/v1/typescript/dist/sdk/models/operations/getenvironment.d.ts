import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnvironmentPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetEnvironmentRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentPathParams;
}
export declare class GetEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    environmentModel?: shared.EnvironmentModel;
    environmentModelHaljson?: shared.EnvironmentModelHaljson;
    statusCode: number;
}
