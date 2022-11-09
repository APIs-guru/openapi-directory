import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionAlias } from "./connectionalias";


export class DescribeConnectionAliasesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionAliases", elemType: shared.ConnectionAlias })
  connectionAliases?: ConnectionAlias[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
