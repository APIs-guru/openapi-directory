import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoDatapointsBrowserBaseDestinationItem } from "./apicoredtodatapointsbrowserbasedestinationitem";
import { ApiCoreDtoDatapointsMultipleDestinationItem } from "./apicoredtodatapointsmultipledestinationitem";
import { ApiCoreDtoDatapointsDatapointRetargetingInfo } from "./apicoredtodatapointsdatapointretargetinginfo";
import { ApiCoreDtoDatapointsUniqueDestinationItem } from "./apicoredtodatapointsuniquedestinationitem";
import { ApiCoreDtoDatapointsUrlByLanguageItem } from "./apicoredtodatapointsurlbylanguageitem";
import { ApiCoreDtoDatapointsUrlByNationItem } from "./apicoredtodatapointsurlbynationitem";
import { ApiCoreDtoDatapointsWeightedDestinationItem } from "./apicoredtodatapointsweighteddestinationitem";


export enum ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum {
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

export enum ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum {
    PermanentRedirect = "PermanentRedirect",
    TemporaryRedirect = "TemporaryRedirect"
}

export enum ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum {
    None = "None",
    Clean = "Clean",
    Myself = "Myself"
}


export class ApiCoreDtoDatapointsTrackingLinkSpecifics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appendQuery" })
  appendQuery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=browserDestinationItem" })
  browserDestinationItem?: ApiCoreDtoDatapointsBrowserBaseDestinationItem;

  @SpeakeasyMetadata({ data: "json, name=destinationMode" })
  destinationMode?: ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=domainId" })
  domainId?: number;

  @SpeakeasyMetadata({ data: "json, name=encodeUrl" })
  encodeUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expirationClicks" })
  expirationClicks?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=firstUrl" })
  firstUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=goDomainId" })
  goDomainId?: number;

  @SpeakeasyMetadata({ data: "json, name=hideUrl" })
  hideUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideUrlTitle" })
  hideUrlTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=isABTest" })
  isAbTest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pauseAfterClicksExpiration" })
  pauseAfterClicksExpiration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pauseAfterDateExpiration" })
  pauseAfterDateExpiration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=randomDestinationItems", elemType: ApiCoreDtoDatapointsMultipleDestinationItem })
  randomDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];

  @SpeakeasyMetadata({ data: "json, name=redirectType" })
  redirectType?: ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=referrerClean" })
  referrerClean?: ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;

  @SpeakeasyMetadata({ data: "json, name=scripts", elemType: ApiCoreDtoDatapointsDatapointRetargetingInfo })
  scripts?: ApiCoreDtoDatapointsDatapointRetargetingInfo[];

  @SpeakeasyMetadata({ data: "json, name=sequentialDestinationItems", elemType: ApiCoreDtoDatapointsMultipleDestinationItem })
  sequentialDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];

  @SpeakeasyMetadata({ data: "json, name=spilloverDestinationItems", elemType: ApiCoreDtoDatapointsMultipleDestinationItem })
  spilloverDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];

  @SpeakeasyMetadata({ data: "json, name=uniqueDestinationItem" })
  uniqueDestinationItem?: ApiCoreDtoDatapointsUniqueDestinationItem;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlAfterClicksExpiration" })
  urlAfterClicksExpiration?: string;

  @SpeakeasyMetadata({ data: "json, name=urlAfterDateExpiration" })
  urlAfterDateExpiration?: string;

  @SpeakeasyMetadata({ data: "json, name=urlsByLanguage", elemType: ApiCoreDtoDatapointsUrlByLanguageItem })
  urlsByLanguage?: ApiCoreDtoDatapointsUrlByLanguageItem[];

  @SpeakeasyMetadata({ data: "json, name=urlsByNation", elemType: ApiCoreDtoDatapointsUrlByNationItem })
  urlsByNation?: ApiCoreDtoDatapointsUrlByNationItem[];

  @SpeakeasyMetadata({ data: "json, name=weightedDestinationItems", elemType: ApiCoreDtoDatapointsWeightedDestinationItem })
  weightedDestinationItems?: ApiCoreDtoDatapointsWeightedDestinationItem[];
}
