import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChromeOsMoveDevicesToOu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceIds" })
  deviceIds?: string[];
}
