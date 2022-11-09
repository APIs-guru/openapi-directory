import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=features" })
  features: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sizes" })
  sizes: any;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}

export enum Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum {
    InProgress = "in-progress"
,    Completed = "completed"
,    Errored = "errored"
}


export class Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=region" })
  region?: Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsRegion;

  @Metadata({ data: "json, name=region_slug" })
  regionSlug?: Map<string, any>;

  @Metadata({ data: "json, name=resource_id" })
  resourceId?: number;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
