import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmVersionInfo } from "./algorithmversioninfo";
/**
 * Information of all available algorithms
**/
export declare class AlgorithmVersionInfoList extends SpeakeasyBase {
    fileKeyAlgorithms: AlgorithmVersionInfo[];
    keyPairAlgorithms: AlgorithmVersionInfo[];
}
