import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataLocationResource } from "./datalocationresource";
import { DatabaseResource } from "./databaseresource";
import { LfTagKeyResource } from "./lftagkeyresource";
import { LfTagPolicyResource } from "./lftagpolicyresource";
import { TableResource } from "./tableresource";
import { TableWithColumnsResource } from "./tablewithcolumnsresource";


// Resource
/** 
 * A structure for the resource.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Catalog" })
  catalog?: Map<string, any>;

  @Metadata({ data: "json, name=DataLocation" })
  dataLocation?: DataLocationResource;

  @Metadata({ data: "json, name=Database" })
  database?: DatabaseResource;

  @Metadata({ data: "json, name=LFTag" })
  lfTag?: LfTagKeyResource;

  @Metadata({ data: "json, name=LFTagPolicy" })
  lfTagPolicy?: LfTagPolicyResource;

  @Metadata({ data: "json, name=Table" })
  table?: TableResource;

  @Metadata({ data: "json, name=TableWithColumns" })
  tableWithColumns?: TableWithColumnsResource;
}
