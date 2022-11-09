import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Geometry } from "./geometry";


// ExpenseDetection
/** 
 * An object used to store information about the Value or Label detected by Amazon Textract.
**/
export class ExpenseDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Geometry" })
  geometry?: Geometry;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}
