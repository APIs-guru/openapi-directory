import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Function
/** 
 * Function
**/
export class Function extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=$permissions" })
  dollarPermissions: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @SpeakeasyMetadata({ data: "json, name=dateUpdated" })
  dateUpdated: number;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleNext" })
  scheduleNext: number;

  @SpeakeasyMetadata({ data: "json, name=schedulePrevious" })
  schedulePrevious: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;

  @SpeakeasyMetadata({ data: "json, name=vars" })
  vars: string;
}
