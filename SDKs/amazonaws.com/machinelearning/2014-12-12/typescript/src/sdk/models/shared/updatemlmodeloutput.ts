import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateMlModelOutput
/** 
 * <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
**/
export class UpdateMlModelOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId?: string;
}
