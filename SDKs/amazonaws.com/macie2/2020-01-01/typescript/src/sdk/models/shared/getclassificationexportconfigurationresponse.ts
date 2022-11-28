import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationExportConfiguration } from "./classificationexportconfiguration";



export class GetClassificationExportConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ClassificationExportConfiguration;
}
