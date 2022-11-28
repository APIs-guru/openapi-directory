import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIpAddressesReservedQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetIpAddressesReservedRequest extends SpeakeasyBase {
    queryParams: GetIpAddressesReservedQueryParams;
}
export declare class GetIpAddressesReservedResponse extends SpeakeasyBase {
    contentType: string;
    publicIpAddressEntities?: shared.PublicIpAddressEntity[];
    statusCode: number;
}
