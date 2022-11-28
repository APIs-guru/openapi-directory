import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplateVersion } from "./servicetemplateversion";



export class UpdateServiceTemplateVersionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceTemplateVersion" })
  serviceTemplateVersion: ServiceTemplateVersion;
}
