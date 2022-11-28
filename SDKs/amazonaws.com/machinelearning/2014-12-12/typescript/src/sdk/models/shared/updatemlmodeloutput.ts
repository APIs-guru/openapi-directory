import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateMlModelOutput
/** 
 * <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
**/
export class UpdateMlModelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;
}
