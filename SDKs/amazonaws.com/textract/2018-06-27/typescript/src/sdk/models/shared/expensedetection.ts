import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";



// ExpenseDetection
/** 
 * An object used to store information about the Value or Label detected by Amazon Textract.
**/
export class ExpenseDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Geometry" })
  geometry?: Geometry;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}
