import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnterpriseAdminListPublicKeysSortEnum {
    Created = "created",
    Updated = "updated",
    Accessed = "accessed"
}
export declare class EnterpriseAdminListPublicKeysQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: EnterpriseAdminListPublicKeysSortEnum;
}
export declare class EnterpriseAdminListPublicKeysRequest extends SpeakeasyBase {
    queryParams: EnterpriseAdminListPublicKeysQueryParams;
}
export declare class EnterpriseAdminListPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    enterprisePublicKeys?: shared.EnterprisePublicKey[];
}
