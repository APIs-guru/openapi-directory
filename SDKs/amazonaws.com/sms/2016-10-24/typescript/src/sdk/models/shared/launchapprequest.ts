import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LaunchAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
