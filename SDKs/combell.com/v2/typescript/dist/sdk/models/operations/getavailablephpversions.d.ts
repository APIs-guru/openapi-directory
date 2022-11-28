import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailablePhpVersionsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetAvailablePhpVersionsQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetAvailablePhpVersionsRequest extends SpeakeasyBase {
    pathParams: GetAvailablePhpVersionsPathParams;
    queryParams: GetAvailablePhpVersionsQueryParams;
}
export declare class GetAvailablePhpVersionsResponse extends SpeakeasyBase {
    contentType: string;
    phpVersions?: shared.PhpVersion[];
    statusCode: number;
}
