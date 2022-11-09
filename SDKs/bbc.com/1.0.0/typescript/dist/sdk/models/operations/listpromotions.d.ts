import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListPromotionsMixinEnum {
    RelatedLinks = "related_links"
}
export declare enum ListPromotionsStatusEnum {
    Current = "current"
}
export declare class ListPromotionsQueryParams extends SpeakeasyBase {
    context?: string;
    mixin?: ListPromotionsMixinEnum[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    pid?: string[];
    promotedBy?: string[];
    promotedFor?: string[];
    q?: string;
    status?: ListPromotionsStatusEnum[];
}
export declare class ListPromotionsRequest extends SpeakeasyBase {
    queryParams: ListPromotionsQueryParams;
}
export declare class ListPromotionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
