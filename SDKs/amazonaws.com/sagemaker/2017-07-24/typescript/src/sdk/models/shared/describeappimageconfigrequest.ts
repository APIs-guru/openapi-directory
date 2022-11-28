import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAppImageConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigName" })
  appImageConfigName: string;
}
