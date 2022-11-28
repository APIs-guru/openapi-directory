import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserByEmailAddressPathParams extends SpeakeasyBase {
    emailAddress: string;
}
export declare class GetUserByEmailAddressQueryParams extends SpeakeasyBase {
    secondaryLookup?: boolean;
}
export declare class GetUserByEmailAddressSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetUserByEmailAddressRequest extends SpeakeasyBase {
    pathParams: GetUserByEmailAddressPathParams;
    queryParams: GetUserByEmailAddressQueryParams;
    security: GetUserByEmailAddressSecurity;
}
export declare class GetUserByEmailAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    user?: any;
}
