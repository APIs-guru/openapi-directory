import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Function
/** 
 * Function
**/
export class Function extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=$permissions" })
  dollarPermissions: Map<string, any>;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated: number;

  @Metadata({ data: "json, name=events" })
  events: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=runtime" })
  runtime: string;

  @Metadata({ data: "json, name=schedule" })
  schedule: string;

  @Metadata({ data: "json, name=scheduleNext" })
  scheduleNext: number;

  @Metadata({ data: "json, name=schedulePrevious" })
  schedulePrevious: number;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=tag" })
  tag: string;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;

  @Metadata({ data: "json, name=vars" })
  vars: string;
}
