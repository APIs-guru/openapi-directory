import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePhpMemoryLimitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memory_limit" })
  memoryLimit?: number;
}
