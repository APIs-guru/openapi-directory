import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoDatapointsBrowserBaseDestinationItem } from "./apicoredtodatapointsbrowserbasedestinationitem";
import { ApiCoreDtoDatapointsMultipleDestinationItem } from "./apicoredtodatapointsmultipledestinationitem";
import { ApiCoreDtoDatapointsDatapointRetargetingInfo } from "./apicoredtodatapointsdatapointretargetinginfo";
import { ApiCoreDtoDatapointsUniqueDestinationItem } from "./apicoredtodatapointsuniquedestinationitem";
import { ApiCoreDtoDatapointsUrlByLanguageItem } from "./apicoredtodatapointsurlbylanguageitem";
import { ApiCoreDtoDatapointsUrlByNationItem } from "./apicoredtodatapointsurlbynationitem";
import { ApiCoreDtoDatapointsWeightedDestinationItem } from "./apicoredtodatapointsweighteddestinationitem";
export declare enum ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum {
    Simple = "Simple",
    RandomDestination = "RandomDestination",
    DestinationByLanguage = "DestinationByLanguage",
    SpilloverDestination = "SpilloverDestination",
    DynamicUrl = "DynamicUrl",
    BrowserDestination = "BrowserDestination",
    DestinationByNation = "DestinationByNation",
    UniqueDestination = "UniqueDestination",
    SequentialDestination = "SequentialDestination",
    WeightedDestination = "WeightedDestination"
}
export declare enum ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum {
    PermanentRedirect = "PermanentRedirect",
    TemporaryRedirect = "TemporaryRedirect"
}
export declare enum ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum {
    None = "None",
    Clean = "Clean",
    Myself = "Myself"
}
export declare class ApiCoreDtoDatapointsTrackingLinkSpecifics extends SpeakeasyBase {
    appendQuery?: boolean;
    browserDestinationItem?: ApiCoreDtoDatapointsBrowserBaseDestinationItem;
    destinationMode?: ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
    domainId?: number;
    encodeUrl?: boolean;
    expirationClicks?: number;
    expirationDate?: string;
    firstUrl?: string;
    goDomainId?: number;
    hideUrl?: boolean;
    hideUrlTitle?: string;
    isAbTest?: boolean;
    password?: string;
    pauseAfterClicksExpiration?: boolean;
    pauseAfterDateExpiration?: boolean;
    randomDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];
    redirectType?: ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
    referrerClean?: ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
    scripts?: ApiCoreDtoDatapointsDatapointRetargetingInfo[];
    sequentialDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];
    spilloverDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];
    uniqueDestinationItem?: ApiCoreDtoDatapointsUniqueDestinationItem;
    url?: string;
    urlAfterClicksExpiration?: string;
    urlAfterDateExpiration?: string;
    urlsByLanguage?: ApiCoreDtoDatapointsUrlByLanguageItem[];
    urlsByNation?: ApiCoreDtoDatapointsUrlByNationItem[];
    weightedDestinationItems?: ApiCoreDtoDatapointsWeightedDestinationItem[];
}
