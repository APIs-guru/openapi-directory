import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHumanTaskUiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;
}
