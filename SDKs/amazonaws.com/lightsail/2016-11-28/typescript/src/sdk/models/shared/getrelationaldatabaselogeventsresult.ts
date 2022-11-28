import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEvent } from "./logevent";



export class GetRelationalDatabaseLogEventsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextBackwardToken" })
  nextBackwardToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextForwardToken" })
  nextForwardToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceLogEvents", elemType: LogEvent })
  resourceLogEvents?: LogEvent[];
}
