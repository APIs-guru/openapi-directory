import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DataLocation" })
  dataLocation?: DataLocationResource;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: DatabaseResource;

  @SpeakeasyMetadata({ data: "json, name=LFTag" })
  lfTag?: LfTagKeyResource;

  @SpeakeasyMetadata({ data: "json, name=LFTagPolicy" })
  lfTagPolicy?: LfTagPolicyResource;

  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: TableResource;

  @SpeakeasyMetadata({ data: "json, name=TableWithColumns" })
  tableWithColumns?: TableWithColumnsResource;
}
