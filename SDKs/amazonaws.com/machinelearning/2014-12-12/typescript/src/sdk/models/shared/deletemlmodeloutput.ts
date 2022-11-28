import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteMlModelOutput
/** 
 * <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>
**/
export class DeleteMlModelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;
}
