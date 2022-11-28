import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPluginPathParams extends SpeakeasyBase {
    npmName: string;
}
export declare class GetPluginSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPluginRequest extends SpeakeasyBase {
    pathParams: GetPluginPathParams;
    security: GetPluginSecurity;
}
export declare class GetPluginResponse extends SpeakeasyBase {
    contentType: string;
    plugin?: any;
    statusCode: number;
}
