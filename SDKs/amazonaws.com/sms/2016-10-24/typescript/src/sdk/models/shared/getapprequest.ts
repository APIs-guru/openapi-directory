import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
