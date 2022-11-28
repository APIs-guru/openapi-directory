import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigsPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetConfigsRequest extends SpeakeasyBase {
    pathParams: GetConfigsPathParams;
}
export declare class GetConfigsResponse extends SpeakeasyBase {
    configModelHaljsons?: shared.ConfigModelHaljson[];
    configModels?: shared.ConfigModel[];
    contentType: string;
    statusCode: number;
}
