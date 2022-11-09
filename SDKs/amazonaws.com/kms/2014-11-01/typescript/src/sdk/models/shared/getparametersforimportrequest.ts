import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmSpecEnum } from "./algorithmspecenum";
import { WrappingKeySpecEnum } from "./wrappingkeyspecenum";


export class GetParametersForImportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=WrappingAlgorithm" })
  wrappingAlgorithm: AlgorithmSpecEnum;

  @Metadata({ data: "json, name=WrappingKeySpec" })
  wrappingKeySpec: WrappingKeySpecEnum;
}
