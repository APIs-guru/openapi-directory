import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentTemplateVersion } from "./environmenttemplateversion";


export class UpdateEnvironmentTemplateVersionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentTemplateVersion" })
  environmentTemplateVersion: EnvironmentTemplateVersion;
}
