import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedConfiguration } from "./supportedconfiguration";


// ScheduleTemplateResponse
/** 
 * The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class ScheduleTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=frequency" })
  frequency?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scheduleTemplateId" })
  scheduleTemplateId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=supportedConfigurations", elemType: shared.SupportedConfiguration })
  supportedConfigurations?: SupportedConfiguration[];
}
