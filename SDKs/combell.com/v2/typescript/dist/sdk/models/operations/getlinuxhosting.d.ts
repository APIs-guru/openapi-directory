import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinuxHostingPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetLinuxHostingQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetLinuxHostingRequest extends SpeakeasyBase {
    pathParams: GetLinuxHostingPathParams;
    queryParams: GetLinuxHostingQueryParams;
}
export declare class GetLinuxHostingResponse extends SpeakeasyBase {
    contentType: string;
    linuxHostingDetail?: shared.LinuxHostingDetail;
    statusCode: number;
}
