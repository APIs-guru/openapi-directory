import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplateVersionSummary } from "./servicetemplateversionsummary";



export class ListServiceTemplateVersionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templateVersions", elemType: ServiceTemplateVersionSummary })
  templateVersions: ServiceTemplateVersionSummary[];
}
