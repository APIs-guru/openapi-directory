import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExpenseType
/** 
 * An object used to store information about the Type detected by Amazon Textract.
**/
export class ExpenseType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}
