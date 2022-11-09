import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsPropertiesRegion extends SpeakeasyBase {
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
