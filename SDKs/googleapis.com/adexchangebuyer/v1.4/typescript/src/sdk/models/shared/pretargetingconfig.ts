import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PretargetingConfigDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}


export class PretargetingConfigExcludedPlacements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PretargetingConfigPlacements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PretargetingConfigVideoPlayerSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=minHeight" })
  minHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=minWidth" })
  minWidth?: string;
}


export class PretargetingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingId" })
  billingId?: string;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configName" })
  configName?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeType" })
  creativeType?: string[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: PretargetingConfigDimensions })
  dimensions?: PretargetingConfigDimensions[];

  @SpeakeasyMetadata({ data: "json, name=excludedContentLabels" })
  excludedContentLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=excludedGeoCriteriaIds" })
  excludedGeoCriteriaIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=excludedPlacements", elemType: PretargetingConfigExcludedPlacements })
  excludedPlacements?: PretargetingConfigExcludedPlacements[];

  @SpeakeasyMetadata({ data: "json, name=excludedUserLists" })
  excludedUserLists?: string[];

  @SpeakeasyMetadata({ data: "json, name=excludedVerticals" })
  excludedVerticals?: string[];

  @SpeakeasyMetadata({ data: "json, name=geoCriteriaIds" })
  geoCriteriaIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=maximumQps" })
  maximumQps?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumViewabilityDecile" })
  minimumViewabilityDecile?: number;

  @SpeakeasyMetadata({ data: "json, name=mobileCarriers" })
  mobileCarriers?: string[];

  @SpeakeasyMetadata({ data: "json, name=mobileDevices" })
  mobileDevices?: string[];

  @SpeakeasyMetadata({ data: "json, name=mobileOperatingSystemVersions" })
  mobileOperatingSystemVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=placements", elemType: PretargetingConfigPlacements })
  placements?: PretargetingConfigPlacements[];

  @SpeakeasyMetadata({ data: "json, name=platforms" })
  platforms?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportedCreativeAttributes" })
  supportedCreativeAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=userIdentifierDataRequired" })
  userIdentifierDataRequired?: string[];

  @SpeakeasyMetadata({ data: "json, name=userLists" })
  userLists?: string[];

  @SpeakeasyMetadata({ data: "json, name=vendorTypes" })
  vendorTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=verticals" })
  verticals?: string[];

  @SpeakeasyMetadata({ data: "json, name=videoPlayerSizes", elemType: PretargetingConfigVideoPlayerSizes })
  videoPlayerSizes?: PretargetingConfigVideoPlayerSizes[];
}
