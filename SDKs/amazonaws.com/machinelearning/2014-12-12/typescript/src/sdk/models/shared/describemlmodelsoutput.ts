import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MlModel } from "./mlmodel";


// DescribeMlModelsOutput
/** 
 * Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
**/
export class DescribeMlModelsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Results", elemType: shared.MlModel })
  results?: MlModel[];
}
