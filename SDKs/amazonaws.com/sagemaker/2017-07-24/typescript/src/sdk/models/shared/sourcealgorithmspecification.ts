import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceAlgorithm } from "./sourcealgorithm";



// SourceAlgorithmSpecification
/** 
 * A list of algorithms that were used to create a model package.
**/
export class SourceAlgorithmSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceAlgorithms", elemType: SourceAlgorithm })
  sourceAlgorithms: SourceAlgorithm[];
}
