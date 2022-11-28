import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExtensionConfigurationHeaders extends SpeakeasyBase {
    acceptLanguage: string;
    cacheControl: string;
    ifNoneMatch?: string;
    requestTimeout: number;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class ExtensionConfigurationRequest extends SpeakeasyBase {
    headers: ExtensionConfigurationHeaders;
}
export declare class ExtensionConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
