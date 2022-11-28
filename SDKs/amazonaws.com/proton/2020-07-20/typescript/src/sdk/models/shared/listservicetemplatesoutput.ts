import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplateSummary } from "./servicetemplatesummary";



export class ListServiceTemplatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templates", elemType: ServiceTemplateSummary })
  templates: ServiceTemplateSummary[];
}
