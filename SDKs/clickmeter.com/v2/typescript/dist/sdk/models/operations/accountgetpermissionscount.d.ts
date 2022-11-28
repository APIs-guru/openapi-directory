import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetPermissionsCountPathParams extends SpeakeasyBase {
    guestId: number;
}
export declare enum AccountGetPermissionsCountEntityTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare enum AccountGetPermissionsCountTypeEnum {
    R = "r",
    W = "w"
}
export declare class AccountGetPermissionsCountQueryParams extends SpeakeasyBase {
    entityId?: number;
    entityType?: AccountGetPermissionsCountEntityTypeEnum;
    type?: AccountGetPermissionsCountTypeEnum;
}
export declare class AccountGetPermissionsCountRequest extends SpeakeasyBase {
    pathParams: AccountGetPermissionsCountPathParams;
    queryParams: AccountGetPermissionsCountQueryParams;
}
export declare class AccountGetPermissionsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
