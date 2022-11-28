import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePhpAPcuRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apcu_size" })
  apcuSize?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
