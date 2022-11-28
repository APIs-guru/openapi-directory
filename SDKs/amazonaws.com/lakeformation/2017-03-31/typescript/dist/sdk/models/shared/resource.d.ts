import { SpeakeasyBase } from "../../../internal/utils";
import { DataLocationResource } from "./datalocationresource";
import { DatabaseResource } from "./databaseresource";
import { LfTagKeyResource } from "./lftagkeyresource";
import { LfTagPolicyResource } from "./lftagpolicyresource";
import { TableResource } from "./tableresource";
import { TableWithColumnsResource } from "./tablewithcolumnsresource";
/**
 * A structure for the resource.
**/
export declare class Resource extends SpeakeasyBase {
    catalog?: Map<string, any>;
    dataLocation?: DataLocationResource;
    database?: DatabaseResource;
    lfTag?: LfTagKeyResource;
    lfTagPolicy?: LfTagPolicyResource;
    table?: TableResource;
    tableWithColumns?: TableWithColumnsResource;
}
