import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeAutoRedirectPathParams extends SpeakeasyBase {
    domainName: string;
    hostname: string;
}
export declare class ChangeAutoRedirectQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangeAutoRedirectRequest extends SpeakeasyBase {
    pathParams: ChangeAutoRedirectPathParams;
    queryParams: ChangeAutoRedirectQueryParams;
    request?: shared.AutoRedirectConfig;
}
export declare class ChangeAutoRedirectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
