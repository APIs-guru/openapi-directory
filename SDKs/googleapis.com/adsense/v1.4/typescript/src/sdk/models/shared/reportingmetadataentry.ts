import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportingMetadataEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibleDimensions" })
  compatibleDimensions?: string[];

  @Metadata({ data: "json, name=compatibleMetrics" })
  compatibleMetrics?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=requiredDimensions" })
  requiredDimensions?: string[];

  @Metadata({ data: "json, name=requiredMetrics" })
  requiredMetrics?: string[];

  @Metadata({ data: "json, name=supportedProducts" })
  supportedProducts?: string[];
}
