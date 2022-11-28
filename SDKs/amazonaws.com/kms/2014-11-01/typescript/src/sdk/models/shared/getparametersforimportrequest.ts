import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSpecEnum } from "./algorithmspecenum";
import { WrappingKeySpecEnum } from "./wrappingkeyspecenum";



export class GetParametersForImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=WrappingAlgorithm" })
  wrappingAlgorithm: AlgorithmSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=WrappingKeySpec" })
  wrappingKeySpec: WrappingKeySpecEnum;
}
