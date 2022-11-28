import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleTemplateResponse } from "./scheduletemplateresponse";



// ScheduleTemplateCollection
/** 
 * The type that defines the fields for a paginated result set of schedule templates. The response consists of 0 or more sequenced pages where each page has 0 or more items.
**/
export class ScheduleTemplateCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTemplates", elemType: ScheduleTemplateResponse })
  scheduleTemplates?: ScheduleTemplateResponse[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
