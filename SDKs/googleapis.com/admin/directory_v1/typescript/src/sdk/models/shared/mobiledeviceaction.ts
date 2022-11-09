import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MobileDeviceAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;
}
