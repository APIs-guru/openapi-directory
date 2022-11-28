import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmVersionInfo } from "./algorithmversioninfo";



// AlgorithmVersionInfoList
/** 
 * Information of all available algorithms
**/
export class AlgorithmVersionInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileKeyAlgorithms", elemType: AlgorithmVersionInfo })
  fileKeyAlgorithms: AlgorithmVersionInfo[];

  @SpeakeasyMetadata({ data: "json, name=keyPairAlgorithms", elemType: AlgorithmVersionInfo })
  keyPairAlgorithms: AlgorithmVersionInfo[];
}
