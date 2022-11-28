import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
