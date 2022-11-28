import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePhpVersionPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangePhpVersionQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangePhpVersionRequest extends SpeakeasyBase {
    pathParams: ChangePhpVersionPathParams;
    queryParams: ChangePhpVersionQueryParams;
    request?: shared.PhpVersion;
}
export declare class ChangePhpVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
