import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTemplateVersion } from "./servicetemplateversion";


export class DeleteServiceTemplateVersionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceTemplateVersion" })
  serviceTemplateVersion?: ServiceTemplateVersion;
}
