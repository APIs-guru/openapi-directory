import { SpeakeasyBase } from "../../../internal/utils";
import { MlModel } from "./mlmodel";
/**
 * Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.
**/
export declare class DescribeMlModelsOutput extends SpeakeasyBase {
    nextToken?: string;
    results?: MlModel[];
}
