import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Constraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowExplicitContent" })
  allowExplicitContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximumQueueSegmentItemCount" })
  maximumQueueSegmentItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updateUserTasteProfile" })
  updateUserTasteProfile?: boolean;
}
