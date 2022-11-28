import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssociationBatchRequestEntry } from "./createassociationbatchrequestentry";



export class CreateAssociationBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: CreateAssociationBatchRequestEntry })
  entries: CreateAssociationBatchRequestEntry[];
}
