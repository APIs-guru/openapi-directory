import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListVersionsAvailabilityEnum {
    Available = "available"
}
export declare enum ListVersionsEmbargoedEnum {
    Include = "include",
    Exclude = "exclude",
    Only = "only"
}
export declare enum ListVersionsPaymentTypeEnum {
    Free = "free",
    Bbcstore = "bbcstore",
    Uscansvod = "uscansvod"
}
export declare class ListVersionsQueryParams extends SpeakeasyBase {
    availability?: ListVersionsAvailabilityEnum[];
    descendantsOf?: string[];
    embargoed?: ListVersionsEmbargoedEnum;
    mediaSet?: string[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    paymentType?: ListVersionsPaymentTypeEnum[];
    pid?: string[];
}
export declare class ListVersionsRequest extends SpeakeasyBase {
    queryParams: ListVersionsQueryParams;
}
export declare class ListVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
