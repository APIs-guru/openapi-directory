import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchGetRecordError } from "./batchgetrecorderror";
import { BatchGetRecordResultDetail } from "./batchgetrecordresultdetail";
import { BatchGetRecordIdentifier } from "./batchgetrecordidentifier";



export class BatchGetRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchGetRecordError })
  errors: BatchGetRecordError[];

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: BatchGetRecordResultDetail })
  records: BatchGetRecordResultDetail[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedIdentifiers", elemType: BatchGetRecordIdentifier })
  unprocessedIdentifiers: BatchGetRecordIdentifier[];
}
