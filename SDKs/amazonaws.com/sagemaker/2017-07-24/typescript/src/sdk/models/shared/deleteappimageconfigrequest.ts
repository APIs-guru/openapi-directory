import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppImageConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;
}
