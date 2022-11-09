import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alarm } from "./alarm";


export class GetAlarmsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarms", elemType: shared.Alarm })
  alarms?: Alarm[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
