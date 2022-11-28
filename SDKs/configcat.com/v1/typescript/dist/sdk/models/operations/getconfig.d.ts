import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigPathParams extends SpeakeasyBase {
    configId: string;
}
export declare class GetConfigRequest extends SpeakeasyBase {
    pathParams: GetConfigPathParams;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    configModel?: shared.ConfigModel;
    configModelHaljson?: shared.ConfigModelHaljson;
    contentType: string;
    statusCode: number;
}
