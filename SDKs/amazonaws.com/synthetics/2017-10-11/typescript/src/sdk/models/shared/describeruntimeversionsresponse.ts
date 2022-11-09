import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeVersion } from "./runtimeversion";


export class DescribeRuntimeVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RuntimeVersions", elemType: shared.RuntimeVersion })
  runtimeVersions?: RuntimeVersion[];
}
