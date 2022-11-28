import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LaunchAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
