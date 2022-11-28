import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssociationBatchRequestEntry } from "./createassociationbatchrequestentry";
import { FaultEnum } from "./faultenum";



// FailedCreateAssociation
/** 
 * Describes a failed association.
**/
export class FailedCreateAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entry" })
  entry?: CreateAssociationBatchRequestEntry;

  @SpeakeasyMetadata({ data: "json, name=Fault" })
  fault?: FaultEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
