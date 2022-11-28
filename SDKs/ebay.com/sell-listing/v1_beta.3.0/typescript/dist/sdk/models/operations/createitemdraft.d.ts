import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateItemDraftHeaders extends SpeakeasyBase {
    contentLanguage?: string;
    xEbayCMarketplaceId: string;
}
export declare class CreateItemDraftSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateItemDraftRequest extends SpeakeasyBase {
    headers: CreateItemDraftHeaders;
    request?: shared.ItemDraft;
    security: CreateItemDraftSecurity;
}
export declare class CreateItemDraftResponse extends SpeakeasyBase {
    contentType: string;
    itemDraftResponse?: shared.ItemDraftResponse;
    statusCode: number;
}
