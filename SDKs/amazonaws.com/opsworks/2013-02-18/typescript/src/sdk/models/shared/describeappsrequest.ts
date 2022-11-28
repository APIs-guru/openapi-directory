import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppIds" })
  appIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
