import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Term
/** 
 * The term being translated by the custom terminology.
**/
export class Term extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceText" })
  sourceText?: string;

  @Metadata({ data: "json, name=TargetText" })
  targetText?: string;
}
