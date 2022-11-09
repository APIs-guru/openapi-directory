import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAdditionalAssignmentsForHitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITId" })
  hitId: string;

  @Metadata({ data: "json, name=NumberOfAdditionalAssignments" })
  numberOfAdditionalAssignments: number;

  @Metadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;
}
