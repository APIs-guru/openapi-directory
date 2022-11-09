import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetUserExtensionsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetUserExtensionsRequest extends SpeakeasyBase {
    security: GetUserExtensionsSecurity;
}
export declare class GetUserExtensionsResponse extends SpeakeasyBase {
    contentType: string;
    extensions?: shared.Extension[];
    statusCode: number;
}
