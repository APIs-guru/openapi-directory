import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PretargetingConfigDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}


export class PretargetingConfigExcludedPlacements extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class PretargetingConfigPlacements extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class PretargetingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingId" })
  billingId?: string;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configName" })
  configName?: string;

  @Metadata({ data: "json, name=creativeType" })
  creativeType?: string[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.PretargetingConfigDimensions })
  dimensions?: PretargetingConfigDimensions[];

  @Metadata({ data: "json, name=excludedContentLabels" })
  excludedContentLabels?: string[];

  @Metadata({ data: "json, name=excludedGeoCriteriaIds" })
  excludedGeoCriteriaIds?: string[];

  @Metadata({ data: "json, name=excludedPlacements", elemType: shared.PretargetingConfigExcludedPlacements })
  excludedPlacements?: PretargetingConfigExcludedPlacements[];

  @Metadata({ data: "json, name=excludedUserLists" })
  excludedUserLists?: string[];

  @Metadata({ data: "json, name=excludedVerticals" })
  excludedVerticals?: string[];

  @Metadata({ data: "json, name=geoCriteriaIds" })
  geoCriteriaIds?: string[];

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=maximumQps" })
  maximumQps?: string;

  @Metadata({ data: "json, name=mobileCarriers" })
  mobileCarriers?: string[];

  @Metadata({ data: "json, name=mobileDevices" })
  mobileDevices?: string[];

  @Metadata({ data: "json, name=mobileOperatingSystemVersions" })
  mobileOperatingSystemVersions?: string[];

  @Metadata({ data: "json, name=placements", elemType: shared.PretargetingConfigPlacements })
  placements?: PretargetingConfigPlacements[];

  @Metadata({ data: "json, name=platforms" })
  platforms?: string[];

  @Metadata({ data: "json, name=supportedCreativeAttributes" })
  supportedCreativeAttributes?: string[];

  @Metadata({ data: "json, name=userLists" })
  userLists?: string[];

  @Metadata({ data: "json, name=vendorTypes" })
  vendorTypes?: string[];

  @Metadata({ data: "json, name=verticals" })
  verticals?: string[];
}
