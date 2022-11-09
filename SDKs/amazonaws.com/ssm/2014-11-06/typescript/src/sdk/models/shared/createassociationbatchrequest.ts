import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAssociationBatchRequestEntry } from "./createassociationbatchrequestentry";


export class CreateAssociationBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.CreateAssociationBatchRequestEntry })
  entries: CreateAssociationBatchRequestEntry[];
}
