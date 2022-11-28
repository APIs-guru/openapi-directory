import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAlias } from "./connectionalias";



export class DescribeConnectionAliasesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionAliases", elemType: ConnectionAlias })
  connectionAliases?: ConnectionAlias[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
