import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoDatapointsBrowserBaseDestinationItem } from "./apicoredtodatapointsbrowserbasedestinationitem";
import { ApiCoreDtoDatapointsMultipleDestinationItem } from "./apicoredtodatapointsmultipledestinationitem";
import { ApiCoreDtoDatapointsDatapointRetargetingInfo } from "./apicoredtodatapointsdatapointretargetinginfo";
import { ApiCoreDtoDatapointsMultipleDestinationItem } from "./apicoredtodatapointsmultipledestinationitem";
import { ApiCoreDtoDatapointsMultipleDestinationItem } from "./apicoredtodatapointsmultipledestinationitem";
import { ApiCoreDtoDatapointsUniqueDestinationItem } from "./apicoredtodatapointsuniquedestinationitem";
import { ApiCoreDtoDatapointsUrlByLanguageItem } from "./apicoredtodatapointsurlbylanguageitem";
import { ApiCoreDtoDatapointsUrlByNationItem } from "./apicoredtodatapointsurlbynationitem";
import { ApiCoreDtoDatapointsWeightedDestinationItem } from "./apicoredtodatapointsweighteddestinationitem";

export enum ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum {
    Simple = "Simple"
,    RandomDestination = "RandomDestination"
,    DestinationByLanguage = "DestinationByLanguage"
,    SpilloverDestination = "SpilloverDestination"
,    DynamicUrl = "DynamicUrl"
,    BrowserDestination = "BrowserDestination"
,    DestinationByNation = "DestinationByNation"
,    UniqueDestination = "UniqueDestination"
,    SequentialDestination = "SequentialDestination"
,    WeightedDestination = "WeightedDestination"
}

export enum ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum {
    PermanentRedirect = "PermanentRedirect"
,    TemporaryRedirect = "TemporaryRedirect"
}

export enum ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum {
    None = "None"
,    Clean = "Clean"
,    Myself = "Myself"
}


export class ApiCoreDtoDatapointsTrackingLinkSpecifics extends SpeakeasyBase {
  @Metadata({ data: "json, name=appendQuery" })
  appendQuery?: boolean;

  @Metadata({ data: "json, name=browserDestinationItem" })
  browserDestinationItem?: ApiCoreDtoDatapointsBrowserBaseDestinationItem;

  @Metadata({ data: "json, name=destinationMode" })
  destinationMode?: ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;

  @Metadata({ data: "json, name=domainId" })
  domainId?: number;

  @Metadata({ data: "json, name=encodeUrl" })
  encodeUrl?: boolean;

  @Metadata({ data: "json, name=expirationClicks" })
  expirationClicks?: number;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=firstUrl" })
  firstUrl?: string;

  @Metadata({ data: "json, name=goDomainId" })
  goDomainId?: number;

  @Metadata({ data: "json, name=hideUrl" })
  hideUrl?: boolean;

  @Metadata({ data: "json, name=hideUrlTitle" })
  hideUrlTitle?: string;

  @Metadata({ data: "json, name=isABTest" })
  isAbTest?: boolean;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=pauseAfterClicksExpiration" })
  pauseAfterClicksExpiration?: boolean;

  @Metadata({ data: "json, name=pauseAfterDateExpiration" })
  pauseAfterDateExpiration?: boolean;

  @Metadata({ data: "json, name=randomDestinationItems", elemType: shared.ApiCoreDtoDatapointsMultipleDestinationItem })
  randomDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];

  @Metadata({ data: "json, name=redirectType" })
  redirectType?: ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;

  @Metadata({ data: "json, name=referrerClean" })
  referrerClean?: ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;

  @Metadata({ data: "json, name=scripts", elemType: shared.ApiCoreDtoDatapointsDatapointRetargetingInfo })
  scripts?: ApiCoreDtoDatapointsDatapointRetargetingInfo[];

  @Metadata({ data: "json, name=sequentialDestinationItems", elemType: shared.ApiCoreDtoDatapointsMultipleDestinationItem })
  sequentialDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];

  @Metadata({ data: "json, name=spilloverDestinationItems", elemType: shared.ApiCoreDtoDatapointsMultipleDestinationItem })
  spilloverDestinationItems?: ApiCoreDtoDatapointsMultipleDestinationItem[];

  @Metadata({ data: "json, name=uniqueDestinationItem" })
  uniqueDestinationItem?: ApiCoreDtoDatapointsUniqueDestinationItem;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urlAfterClicksExpiration" })
  urlAfterClicksExpiration?: string;

  @Metadata({ data: "json, name=urlAfterDateExpiration" })
  urlAfterDateExpiration?: string;

  @Metadata({ data: "json, name=urlsByLanguage", elemType: shared.ApiCoreDtoDatapointsUrlByLanguageItem })
  urlsByLanguage?: ApiCoreDtoDatapointsUrlByLanguageItem[];

  @Metadata({ data: "json, name=urlsByNation", elemType: shared.ApiCoreDtoDatapointsUrlByNationItem })
  urlsByNation?: ApiCoreDtoDatapointsUrlByNationItem[];

  @Metadata({ data: "json, name=weightedDestinationItems", elemType: shared.ApiCoreDtoDatapointsWeightedDestinationItem })
  weightedDestinationItems?: ApiCoreDtoDatapointsWeightedDestinationItem[];
}
