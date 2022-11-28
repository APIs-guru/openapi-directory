import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MobileDeviceAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;
}
