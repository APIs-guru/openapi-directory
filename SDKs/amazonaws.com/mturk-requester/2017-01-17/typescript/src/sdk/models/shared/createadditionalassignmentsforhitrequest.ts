import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAdditionalAssignmentsForHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfAdditionalAssignments" })
  numberOfAdditionalAssignments: number;

  @SpeakeasyMetadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;
}
