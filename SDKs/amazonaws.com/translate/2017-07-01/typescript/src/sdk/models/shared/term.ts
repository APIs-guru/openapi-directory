import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Term
/** 
 * The term being translated by the custom terminology.
**/
export class Term extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceText" })
  sourceText?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetText" })
  targetText?: string;
}
