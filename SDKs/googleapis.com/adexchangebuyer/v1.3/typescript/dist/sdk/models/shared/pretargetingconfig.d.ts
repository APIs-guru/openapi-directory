import { SpeakeasyBase } from "../../../internal/utils";
export declare class PretargetingConfigDimensions extends SpeakeasyBase {
    height?: string;
    width?: string;
}
export declare class PretargetingConfigExcludedPlacements extends SpeakeasyBase {
    token?: string;
    type?: string;
}
export declare class PretargetingConfigPlacements extends SpeakeasyBase {
    token?: string;
    type?: string;
}
export declare class PretargetingConfig extends SpeakeasyBase {
    billingId?: string;
    configId?: string;
    configName?: string;
    creativeType?: string[];
    dimensions?: PretargetingConfigDimensions[];
    excludedContentLabels?: string[];
    excludedGeoCriteriaIds?: string[];
    excludedPlacements?: PretargetingConfigExcludedPlacements[];
    excludedUserLists?: string[];
    excludedVerticals?: string[];
    geoCriteriaIds?: string[];
    isActive?: boolean;
    kind?: string;
    languages?: string[];
    maximumQps?: string;
    mobileCarriers?: string[];
    mobileDevices?: string[];
    mobileOperatingSystemVersions?: string[];
    placements?: PretargetingConfigPlacements[];
    platforms?: string[];
    supportedCreativeAttributes?: string[];
    userLists?: string[];
    vendorTypes?: string[];
    verticals?: string[];
}
