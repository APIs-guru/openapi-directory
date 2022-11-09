import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogEvent } from "./logevent";


export class GetRelationalDatabaseLogEventsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextBackwardToken" })
  nextBackwardToken?: string;

  @Metadata({ data: "json, name=nextForwardToken" })
  nextForwardToken?: string;

  @Metadata({ data: "json, name=resourceLogEvents", elemType: shared.LogEvent })
  resourceLogEvents?: LogEvent[];
}
