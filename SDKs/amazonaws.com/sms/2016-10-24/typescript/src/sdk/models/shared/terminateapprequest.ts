import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
