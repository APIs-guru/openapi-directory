import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JoinSourceEnum } from "./joinsourceenum";



// DataProcessing
/** 
 * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>.
**/
export class DataProcessing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputFilter" })
  inputFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=JoinSource" })
  joinSource?: JoinSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputFilter" })
  outputFilter?: string;
}
