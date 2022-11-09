import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk" })
  disk: number;

  @Metadata({ data: "json, name=memory" })
  memory: number;

  @Metadata({ data: "json, name=price_hourly" })
  priceHourly: number;

  @Metadata({ data: "json, name=price_monthly" })
  priceMonthly: number;

  @Metadata({ data: "json, name=regions" })
  regions: string[];

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=transfer" })
  transfer: number;

  @Metadata({ data: "json, name=vcpus" })
  vcpus: number;
}
