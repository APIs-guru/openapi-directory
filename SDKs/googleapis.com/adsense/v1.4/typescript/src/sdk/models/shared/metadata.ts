import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportingMetadataEntry } from "./reportingmetadataentry";



export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ReportingMetadataEntry })
  items?: ReportingMetadataEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
