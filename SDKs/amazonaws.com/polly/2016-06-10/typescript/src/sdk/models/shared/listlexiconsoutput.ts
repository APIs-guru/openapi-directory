import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LexiconDescription } from "./lexicondescription";



export class ListLexiconsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lexicons", elemType: LexiconDescription })
  lexicons?: LexiconDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
