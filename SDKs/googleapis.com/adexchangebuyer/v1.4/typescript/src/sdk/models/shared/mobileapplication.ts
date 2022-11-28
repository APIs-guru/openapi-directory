import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MobileApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appStore" })
  appStore?: string;

  @SpeakeasyMetadata({ data: "json, name=externalAppId" })
  externalAppId?: string;
}
