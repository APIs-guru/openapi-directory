import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CapacityCommitment } from "./capacitycommitment";


// ListCapacityCommitmentsResponse
/** 
 * The response for ReservationService.ListCapacityCommitments.
**/
export class ListCapacityCommitmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityCommitments", elemType: shared.CapacityCommitment })
  capacityCommitments?: CapacityCommitment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
