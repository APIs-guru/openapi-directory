import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName: string;
}
