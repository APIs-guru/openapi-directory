import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpenseType
/** 
 * An object used to store information about the Type detected by Amazon Textract.
**/
export class ExpenseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}
