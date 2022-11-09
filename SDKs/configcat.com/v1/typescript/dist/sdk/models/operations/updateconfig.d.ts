import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateConfigPathParams extends SpeakeasyBase {
    configId: string;
}
export declare class UpdateConfigRequests extends SpeakeasyBase {
    updateConfigRequest?: shared.UpdateConfigRequest;
    updateConfigRequest1?: shared.UpdateConfigRequest;
    updateConfigRequest2?: shared.UpdateConfigRequest;
}
export declare class UpdateConfigRequest extends SpeakeasyBase {
    pathParams: UpdateConfigPathParams;
    request: UpdateConfigRequests;
}
export declare class UpdateConfigResponse extends SpeakeasyBase {
    configModel?: shared.ConfigModel;
    configModelHaljson?: shared.ConfigModelHaljson;
    contentType: string;
    statusCode: number;
}
