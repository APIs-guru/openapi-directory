import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportingMetadataEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibleDimensions" })
  compatibleDimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=compatibleMetrics" })
  compatibleMetrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=requiredDimensions" })
  requiredDimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=requiredMetrics" })
  requiredMetrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportedProducts" })
  supportedProducts?: string[];
}
