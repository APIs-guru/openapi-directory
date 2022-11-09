import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchGetCustomDataIdentifierSummary } from "./batchgetcustomdataidentifiersummary";


export class BatchGetCustomDataIdentifiersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customDataIdentifiers", elemType: shared.BatchGetCustomDataIdentifierSummary })
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];

  @Metadata({ data: "json, name=notFoundIdentifierIds" })
  notFoundIdentifierIds?: string[];
}
