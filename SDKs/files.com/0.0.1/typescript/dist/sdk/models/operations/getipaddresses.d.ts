import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIpAddressesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetIpAddressesRequest extends SpeakeasyBase {
    queryParams: GetIpAddressesQueryParams;
}
export declare class GetIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    ipAddressEntities?: shared.IpAddressEntity[];
    statusCode: number;
}
