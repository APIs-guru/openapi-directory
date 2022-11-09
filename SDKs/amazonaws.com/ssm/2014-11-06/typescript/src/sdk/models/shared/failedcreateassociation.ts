import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateAssociationBatchRequestEntry } from "./createassociationbatchrequestentry";
import { FaultEnum } from "./faultenum";


// FailedCreateAssociation
/** 
 * Describes a failed association.
**/
export class FailedCreateAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entry" })
  entry?: CreateAssociationBatchRequestEntry;

  @Metadata({ data: "json, name=Fault" })
  fault?: FaultEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
