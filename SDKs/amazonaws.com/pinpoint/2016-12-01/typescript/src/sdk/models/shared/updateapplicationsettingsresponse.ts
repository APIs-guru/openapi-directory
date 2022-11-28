import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSettingsResource } from "./applicationsettingsresource";



export class UpdateApplicationSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationSettingsResource" })
  applicationSettingsResource: ApplicationSettingsResource;
}
