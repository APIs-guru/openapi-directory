import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplateVersion } from "./servicetemplateversion";



export class DeleteServiceTemplateVersionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceTemplateVersion" })
  serviceTemplateVersion?: ServiceTemplateVersion;
}
