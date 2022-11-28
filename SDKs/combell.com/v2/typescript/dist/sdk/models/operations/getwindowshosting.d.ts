import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWindowsHostingPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetWindowsHostingQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetWindowsHostingRequest extends SpeakeasyBase {
    pathParams: GetWindowsHostingPathParams;
    queryParams: GetWindowsHostingQueryParams;
}
export declare class GetWindowsHostingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    windowsHostingDetail?: shared.WindowsHostingDetail;
}
