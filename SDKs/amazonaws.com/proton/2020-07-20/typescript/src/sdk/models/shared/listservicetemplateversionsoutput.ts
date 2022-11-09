import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceTemplateVersionSummary } from "./servicetemplateversionsummary";


export class ListServiceTemplateVersionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templateVersions", elemType: shared.ServiceTemplateVersionSummary })
  templateVersions: ServiceTemplateVersionSummary[];
}
