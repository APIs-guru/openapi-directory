import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureSshPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureSshQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureSshRequest extends SpeakeasyBase {
    pathParams: ConfigureSshPathParams;
    queryParams: ConfigureSshQueryParams;
    request?: shared.SshConfiguration;
}
export declare class ConfigureSshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
