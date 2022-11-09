import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceTemplateSummary } from "./servicetemplatesummary";


export class ListServiceTemplatesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templates", elemType: shared.ServiceTemplateSummary })
  templates: ServiceTemplateSummary[];
}
