import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformationStringFilter } from "./instanceinformationstringfilter";
import { InstanceInformationFilter } from "./instanceinformationfilter";



export class DescribeInstanceInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: InstanceInformationStringFilter })
  filters?: InstanceInformationStringFilter[];

  @SpeakeasyMetadata({ data: "json, name=InstanceInformationFilterList", elemType: InstanceInformationFilter })
  instanceInformationFilterList?: InstanceInformationFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
