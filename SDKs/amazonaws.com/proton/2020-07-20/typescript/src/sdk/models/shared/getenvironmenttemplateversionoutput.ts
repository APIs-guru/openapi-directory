import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplateVersion } from "./environmenttemplateversion";



export class GetEnvironmentTemplateVersionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentTemplateVersion" })
  environmentTemplateVersion: EnvironmentTemplateVersion;
}
