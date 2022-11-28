import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureAntiSpamPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureAntiSpamQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ConfigureAntiSpamRequest extends SpeakeasyBase {
    pathParams: ConfigureAntiSpamPathParams;
    queryParams: ConfigureAntiSpamQueryParams;
    request?: shared.UpdateAntiSpamRequest;
}
export declare class ConfigureAntiSpamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
