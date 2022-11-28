import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeContextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextName" })
  contextName: string;
}
