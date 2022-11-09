import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchGetRecordError } from "./batchgetrecorderror";
import { BatchGetRecordResultDetail } from "./batchgetrecordresultdetail";
import { BatchGetRecordIdentifier } from "./batchgetrecordidentifier";


export class BatchGetRecordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchGetRecordError })
  errors: BatchGetRecordError[];

  @Metadata({ data: "json, name=Records", elemType: shared.BatchGetRecordResultDetail })
  records: BatchGetRecordResultDetail[];

  @Metadata({ data: "json, name=UnprocessedIdentifiers", elemType: shared.BatchGetRecordIdentifier })
  unprocessedIdentifiers: BatchGetRecordIdentifier[];
}
