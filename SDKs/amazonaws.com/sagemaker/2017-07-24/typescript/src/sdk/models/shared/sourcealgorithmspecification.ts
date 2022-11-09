import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceAlgorithm } from "./sourcealgorithm";


// SourceAlgorithmSpecification
/** 
 * A list of algorithms that were used to create a model package.
**/
export class SourceAlgorithmSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceAlgorithms", elemType: shared.SourceAlgorithm })
  sourceAlgorithms: SourceAlgorithm[];
}
