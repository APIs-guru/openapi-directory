import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";



export class BatchGetTracesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Traces", elemType: Trace })
  traces?: Trace[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedTraceIds" })
  unprocessedTraceIds?: string[];
}
