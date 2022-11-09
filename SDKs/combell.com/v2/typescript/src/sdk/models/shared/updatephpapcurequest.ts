import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePhpAPcuRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=apcu_size" })
  apcuSize?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
