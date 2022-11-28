import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AvailabilityRequestClosestEnum {
    Either = "either",
    After = "after",
    Before = "before"
}


export class AvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closest, form, name=closest;" })
  closest?: AvailabilityRequestClosestEnum;

  @SpeakeasyMetadata({ data: "json, name=tag, form, name=tag;" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp, form, name=timestamp;" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=url, form, name=url;" })
  url: string;
}
