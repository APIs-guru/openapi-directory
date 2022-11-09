import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trace } from "./trace";


export class BatchGetTracesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Traces", elemType: shared.Trace })
  traces?: Trace[];

  @Metadata({ data: "json, name=UnprocessedTraceIds" })
  unprocessedTraceIds?: string[];
}
