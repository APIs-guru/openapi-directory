import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaginatedPipelineScheduleExecutions
/** 
 * A paged list of the executions of a schedule.
**/
export class PaginatedPipelineScheduleExecutions extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=values" })
  values?: Map<string, any>[];
}
