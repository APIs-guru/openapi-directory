import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAppsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAppsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAppsQueryParams;
}

export enum ListApps200ApplicationJsonAppsDomainsPhaseEnum {
    Unknown = "UNKNOWN"
,    Pending = "PENDING"
,    Configuring = "CONFIGURING"
,    Active = "ACTIVE"
,    Error = "ERROR"
}


export class ListApps200ApplicationJsonAppsDomainsProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=steps" })
  steps?: Map<string, any>[];
}


export class ListApps200ApplicationJsonAppsDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=phase" })
  phase?: ListApps200ApplicationJsonAppsDomainsPhaseEnum;

  @Metadata({ data: "json, name=progress" })
  progress?: ListApps200ApplicationJsonAppsDomainsProgress;

  @Metadata({ data: "json, name=spec" })
  spec?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems;
}


export class ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin extends SpeakeasyBase {
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


// ListApps200ApplicationJsonApps
/** 
 * An application's configuration and status.
**/
export class ListApps200ApplicationJsonApps extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_deployment" })
  activeDeployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=default_ingress" })
  defaultIngress?: string;

  @Metadata({ data: "json, name=domains", elemType: operations.ListApps200ApplicationJsonAppsDomains })
  domains?: ListApps200ApplicationJsonAppsDomains[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=in_progress_deployment" })
  inProgressDeployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;

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
  region?: ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin;

  @Metadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;

  @Metadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ListApps200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: operations.ListApps200ApplicationJsonApps })
  apps?: ListApps200ApplicationJsonApps[];

  @Metadata({ data: "json, name=links" })
  links?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta;
}


export class ListApps401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAppsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listApps200ApplicationJsonObject?: ListApps200ApplicationJson;

  @Metadata()
  listApps401ApplicationJsonObject?: ListApps401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
