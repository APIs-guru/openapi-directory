import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesConnectionAllOf0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
