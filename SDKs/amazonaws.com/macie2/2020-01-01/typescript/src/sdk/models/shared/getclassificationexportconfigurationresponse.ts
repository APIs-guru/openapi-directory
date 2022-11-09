import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationExportConfiguration } from "./classificationexportconfiguration";


export class GetClassificationExportConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: ClassificationExportConfiguration;
}
