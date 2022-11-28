import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureHttp2PathParams extends SpeakeasyBase {
    domainName: string;
    siteName: string;
}
export declare class ConfigureHttp2QueryParams extends SpeakeasyBase {
    domainName: string;
    siteName: string;
}
export declare class ConfigureHttp2Request extends SpeakeasyBase {
    pathParams: ConfigureHttp2PathParams;
    queryParams: ConfigureHttp2QueryParams;
    request?: shared.Http2Configuration;
}
export declare class ConfigureHttp2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
