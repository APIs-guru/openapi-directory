import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppValidationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;
}
