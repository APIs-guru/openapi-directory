import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesdomainsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec } from "./1v21apps17bappid7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspec";

export enum Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum {
    Unknown = "UNKNOWN"
,    Pending = "PENDING"
,    Configuring = "CONFIGURING"
,    Active = "ACTIVE"
,    Error = "ERROR"
}


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=steps" })
  steps?: Map<string, any>[];
}


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=phase" })
  phase?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum;

  @Metadata({ data: "json, name=progress" })
  progress?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress;

  @Metadata({ data: "json, name=spec" })
  spec?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems;
}


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin extends SpeakeasyBase {
  @Metadata({ data: "json, name=continent" })
  continent?: string;

  @Metadata({ data: "json, name=data_centers" })
  dataCenters?: string[];

  @Metadata({ data: "json, name=default" })
  default?: boolean;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=flag" })
  flag?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}


// Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems
/** 
 * An application's configuration and status.
**/
export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_deployment" })
  activeDeployment?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=default_ingress" })
  defaultIngress?: string;

  @Metadata({ data: "json, name=domains", elemType: shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains })
  domains?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=in_progress_deployment" })
  inProgressDeployment?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

  @Metadata({ data: "json, name=last_deployment_created_at" })
  lastDeploymentCreatedAt?: Date;

  @Metadata({ data: "json, name=live_domain" })
  liveDomain?: string;

  @Metadata({ data: "json, name=live_url" })
  liveUrl?: string;

  @Metadata({ data: "json, name=live_url_base" })
  liveUrlBase?: string;

  @Metadata({ data: "json, name=owner_uuid" })
  ownerUuid?: string;

  @Metadata({ data: "json, name=region" })
  region?: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin;

  @Metadata({ data: "json, name=spec" })
  spec: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;

  @Metadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
