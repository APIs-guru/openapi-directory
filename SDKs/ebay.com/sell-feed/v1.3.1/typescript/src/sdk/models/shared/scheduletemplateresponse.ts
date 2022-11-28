import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedConfiguration } from "./supportedconfiguration";



// ScheduleTemplateResponse
/** 
 * The type that defines the fields for a paginated result set of available schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class ScheduleTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTemplateId" })
  scheduleTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedConfigurations", elemType: SupportedConfiguration })
  supportedConfigurations?: SupportedConfiguration[];
}
