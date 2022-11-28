import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigurationsRequestBody extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class PostConfigurations201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Map<string, any>;
}
export declare class PostConfigurationsRequest extends SpeakeasyBase {
    request: PostConfigurationsRequestBody;
}
export declare class PostConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postConfigurations201ApplicationJsonObject?: PostConfigurations201ApplicationJson;
}
