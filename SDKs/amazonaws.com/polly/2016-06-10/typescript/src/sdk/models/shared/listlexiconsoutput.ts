import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LexiconDescription } from "./lexicondescription";


export class ListLexiconsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lexicons", elemType: shared.LexiconDescription })
  lexicons?: LexiconDescription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
