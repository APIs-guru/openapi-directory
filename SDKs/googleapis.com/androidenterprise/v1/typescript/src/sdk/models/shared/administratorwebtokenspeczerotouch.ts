import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdministratorWebTokenSpecZeroTouch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
