import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigConfigGetHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class ConfigConfigGetRequest extends SpeakeasyBase {
    headers: ConfigConfigGetHeaders;
}
export declare class ConfigConfigGetResponse extends SpeakeasyBase {
    config?: shared.Config;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
