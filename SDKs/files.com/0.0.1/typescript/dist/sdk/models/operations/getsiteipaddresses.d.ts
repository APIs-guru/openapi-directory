import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSiteIpAddressesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetSiteIpAddressesRequest extends SpeakeasyBase {
    queryParams: GetSiteIpAddressesQueryParams;
}
export declare class GetSiteIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    ipAddressEntities?: shared.IpAddressEntity[];
    statusCode: number;
}
