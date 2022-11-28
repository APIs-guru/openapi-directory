import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePhpMemoryLimitPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangePhpMemoryLimitQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangePhpMemoryLimitRequest extends SpeakeasyBase {
    pathParams: ChangePhpMemoryLimitPathParams;
    queryParams: ChangePhpMemoryLimitQueryParams;
    request?: shared.UpdatePhpMemoryLimitRequest;
}
export declare class ChangePhpMemoryLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
