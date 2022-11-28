import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListServicesServiceTypeEnum {
    Interactive = "Interactive",
    LocalRadio = "Local Radio",
    MasterBrandOnly = "Master Brand Only",
    NationalRadio = "National Radio",
    OnDemand = "On Demand",
    RegionalRadio = "Regional Radio",
    Simulcast = "Simulcast",
    Tv = "TV",
    WebOnly = "Web Only",
    Webcast = "Webcast"
}
export declare class ListServicesQueryParams extends SpeakeasyBase {
    endFrom?: Date;
    endTo?: Date;
    mid?: string[];
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    q?: string;
    serviceType?: ListServicesServiceTypeEnum[];
    sid?: string[];
    startFrom?: Date;
    startTo?: Date;
}
export declare class ListServicesRequest extends SpeakeasyBase {
    queryParams: ListServicesQueryParams;
}
export declare class ListServicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
