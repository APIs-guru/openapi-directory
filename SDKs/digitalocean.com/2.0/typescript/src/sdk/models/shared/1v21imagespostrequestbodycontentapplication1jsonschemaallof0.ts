import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum } from "./1v21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitemspropertiesimagepropertiesdistributionenum";


export class Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distribution" })
  distribution?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
