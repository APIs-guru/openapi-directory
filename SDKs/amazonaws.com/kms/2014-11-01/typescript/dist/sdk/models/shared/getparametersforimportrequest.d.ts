import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSpecEnum } from "./algorithmspecenum";
import { WrappingKeySpecEnum } from "./wrappingkeyspecenum";
export declare class GetParametersForImportRequest extends SpeakeasyBase {
    keyId: string;
    wrappingAlgorithm: AlgorithmSpecEnum;
    wrappingKeySpec: WrappingKeySpecEnum;
}
