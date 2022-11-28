import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSubscriptionFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterName" })
  filterName: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
