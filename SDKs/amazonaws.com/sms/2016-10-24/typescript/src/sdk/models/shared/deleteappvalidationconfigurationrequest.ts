import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppValidationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;
}
