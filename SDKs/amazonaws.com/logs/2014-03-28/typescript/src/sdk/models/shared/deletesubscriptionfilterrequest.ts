import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSubscriptionFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterName" })
  filterName: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
