import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetPermissionsPathParams extends SpeakeasyBase {
    guestId: number;
}
export declare enum AccountGetPermissionsEntityTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare enum AccountGetPermissionsTypeEnum {
    R = "r",
    W = "w"
}
export declare class AccountGetPermissionsQueryParams extends SpeakeasyBase {
    entityId?: number;
    entityType?: AccountGetPermissionsEntityTypeEnum;
    limit?: number;
    offset?: number;
    type?: AccountGetPermissionsTypeEnum;
}
export declare class AccountGetPermissionsRequest extends SpeakeasyBase {
    pathParams: AccountGetPermissionsPathParams;
    queryParams: AccountGetPermissionsQueryParams;
}
export declare class AccountGetPermissionsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant;
    contentType: string;
    statusCode: number;
}
