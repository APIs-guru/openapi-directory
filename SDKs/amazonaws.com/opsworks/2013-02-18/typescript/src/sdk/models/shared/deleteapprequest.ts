import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId: string;
}
