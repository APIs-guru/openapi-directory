import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks
/** 
 * The links object contains the `self` object, which contains the resource relationship.
**/
export class Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}

export enum Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum {
    Ok = "ok"
,    NotFound = "not_found"
,    Assigned = "assigned"
,    AlreadyAssigned = "already_assigned"
,    ServiceDown = "service_down"
}


export class Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigned_at" })
  assignedAt?: Date;

  @Metadata({ data: "json, name=links" })
  links?: Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks;

  @Metadata({ data: "json, name=status" })
  status?: Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum;

  @Metadata({ data: "json, name=urn" })
  urn?: string;
}
