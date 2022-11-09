import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeHumanTaskUiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;
}
