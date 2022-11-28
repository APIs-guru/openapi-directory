import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureFtpPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureFtpQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureFtpRequest extends SpeakeasyBase {
    pathParams: ConfigureFtpPathParams;
    queryParams: ConfigureFtpQueryParams;
    request?: shared.FtpConfiguration;
}
export declare class ConfigureFtpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
