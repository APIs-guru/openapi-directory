import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId: string;
}
