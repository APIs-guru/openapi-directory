import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeContextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextName" })
  contextName: string;
}
