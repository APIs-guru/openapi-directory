import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
