import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAppsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppIds" })
  appIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
