import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationSettingsResource } from "./applicationsettingsresource";


export class GetApplicationSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSettingsResource" })
  applicationSettingsResource: ApplicationSettingsResource;
}
