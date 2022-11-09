import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum {
    Development = "Development"
,    Staging = "Staging"
,    Production = "Production"
}


export class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: number;

  @Metadata({ data: "json, name=owner_uuid" })
  ownerUuid?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
