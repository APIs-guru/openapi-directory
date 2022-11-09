import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Constraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowExplicitContent" })
  allowExplicitContent?: boolean;

  @Metadata({ data: "json, name=maximumQueueSegmentItemCount" })
  maximumQueueSegmentItemCount?: number;

  @Metadata({ data: "json, name=updateUserTasteProfile" })
  updateUserTasteProfile?: boolean;
}
