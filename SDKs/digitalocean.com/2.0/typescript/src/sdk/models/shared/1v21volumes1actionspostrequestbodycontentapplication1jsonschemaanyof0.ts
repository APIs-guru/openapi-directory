import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum } from "./1v21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitemspropertiesimagepropertiesregionsitemsenum";

export enum Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum {
    Attach = "attach"
,    Detach = "detach"
,    Resize = "resize"
}


export class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @Metadata({ data: "json, name=region" })
  region?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type: Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum;
}
