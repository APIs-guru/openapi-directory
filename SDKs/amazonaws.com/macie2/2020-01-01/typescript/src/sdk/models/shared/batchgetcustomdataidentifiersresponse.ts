import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchGetCustomDataIdentifierSummary } from "./batchgetcustomdataidentifiersummary";



export class BatchGetCustomDataIdentifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDataIdentifiers", elemType: BatchGetCustomDataIdentifierSummary })
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];

  @SpeakeasyMetadata({ data: "json, name=notFoundIdentifierIds" })
  notFoundIdentifierIds?: string[];
}
