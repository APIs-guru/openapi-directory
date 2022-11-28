import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAutoMlJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;
}
