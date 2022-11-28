import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateUserStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
