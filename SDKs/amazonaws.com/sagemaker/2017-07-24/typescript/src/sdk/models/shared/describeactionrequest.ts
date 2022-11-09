import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeActionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionName" })
  actionName: string;
}
