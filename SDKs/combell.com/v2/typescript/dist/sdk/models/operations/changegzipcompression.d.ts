import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeGzipCompressionPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangeGzipCompressionQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangeGzipCompressionRequest extends SpeakeasyBase {
    pathParams: ChangeGzipCompressionPathParams;
    queryParams: ChangeGzipCompressionQueryParams;
    request?: shared.GzipConfig;
}
export declare class ChangeGzipCompressionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
