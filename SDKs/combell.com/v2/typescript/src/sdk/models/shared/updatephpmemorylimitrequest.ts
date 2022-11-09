import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePhpMemoryLimitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=memory_limit" })
  memoryLimit?: number;
}
