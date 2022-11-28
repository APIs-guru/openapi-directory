import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Adexchangebuyer2AccountsCreativesCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum {
    NoDuplicates = "NO_DUPLICATES",
    ForceEnableDuplicateIds = "FORCE_ENABLE_DUPLICATE_IDS"
}
export declare class Adexchangebuyer2AccountsCreativesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    duplicateIdMode?: Adexchangebuyer2AccountsCreativesCreateDuplicateIdModeEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class Adexchangebuyer2AccountsCreativesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class Adexchangebuyer2AccountsCreativesCreateRequest extends SpeakeasyBase {
    pathParams: Adexchangebuyer2AccountsCreativesCreatePathParams;
    queryParams: Adexchangebuyer2AccountsCreativesCreateQueryParams;
    request?: shared.Creative;
    security: Adexchangebuyer2AccountsCreativesCreateSecurity;
}
export declare class Adexchangebuyer2AccountsCreativesCreateResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
