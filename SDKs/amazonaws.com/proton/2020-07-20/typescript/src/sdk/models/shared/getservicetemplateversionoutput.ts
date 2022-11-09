import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTemplateVersion } from "./servicetemplateversion";


export class GetServiceTemplateVersionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceTemplateVersion" })
  serviceTemplateVersion: ServiceTemplateVersion;
}
