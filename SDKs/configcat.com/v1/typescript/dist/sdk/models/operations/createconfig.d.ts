import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConfigPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class CreateConfigRequests extends SpeakeasyBase {
    createConfigRequest?: shared.CreateConfigRequest;
    createConfigRequest1?: shared.CreateConfigRequest;
    createConfigRequest2?: shared.CreateConfigRequest;
}
export declare class CreateConfigRequest extends SpeakeasyBase {
    pathParams: CreateConfigPathParams;
    request: CreateConfigRequests;
}
export declare class CreateConfigResponse extends SpeakeasyBase {
    configModel?: shared.ConfigModel;
    configModelHaljson?: shared.ConfigModelHaljson;
    contentType: string;
    statusCode: number;
}
