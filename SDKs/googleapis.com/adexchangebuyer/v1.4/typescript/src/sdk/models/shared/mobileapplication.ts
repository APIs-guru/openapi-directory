import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MobileApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=appStore" })
  appStore?: string;

  @Metadata({ data: "json, name=externalAppId" })
  externalAppId?: string;
}
