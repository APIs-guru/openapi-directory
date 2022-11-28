import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableMember } from "./tablemember";



export class ListTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tables", elemType: TableMember })
  tables?: TableMember[];
}
