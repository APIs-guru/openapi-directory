import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAutoMlJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;
}
