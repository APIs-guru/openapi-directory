import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MlModel } from "./mlmodel";



// DescribeMlModelsOutput
/** 
 * Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
**/
export class DescribeMlModelsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: MlModel })
  results?: MlModel[];
}
