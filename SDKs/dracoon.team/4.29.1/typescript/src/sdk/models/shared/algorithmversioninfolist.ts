import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlgorithmVersionInfo } from "./algorithmversioninfo";
import { AlgorithmVersionInfo } from "./algorithmversioninfo";


// AlgorithmVersionInfoList
/** 
 * Information of all available algorithms
**/
export class AlgorithmVersionInfoList extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileKeyAlgorithms", elemType: shared.AlgorithmVersionInfo })
  fileKeyAlgorithms: AlgorithmVersionInfo[];

  @Metadata({ data: "json, name=keyPairAlgorithms", elemType: shared.AlgorithmVersionInfo })
  keyPairAlgorithms: AlgorithmVersionInfo[];
}
