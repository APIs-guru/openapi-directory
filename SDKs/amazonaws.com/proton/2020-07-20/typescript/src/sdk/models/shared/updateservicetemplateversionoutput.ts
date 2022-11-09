import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTemplateVersion } from "./servicetemplateversion";


export class UpdateServiceTemplateVersionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceTemplateVersion" })
  serviceTemplateVersion: ServiceTemplateVersion;
}
