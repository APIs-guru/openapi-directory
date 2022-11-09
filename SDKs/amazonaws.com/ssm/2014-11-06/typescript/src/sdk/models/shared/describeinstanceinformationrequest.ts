import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceInformationStringFilter } from "./instanceinformationstringfilter";
import { InstanceInformationFilter } from "./instanceinformationfilter";


export class DescribeInstanceInformationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.InstanceInformationStringFilter })
  filters?: InstanceInformationStringFilter[];

  @Metadata({ data: "json, name=InstanceInformationFilterList", elemType: shared.InstanceInformationFilter })
  instanceInformationFilterList?: InstanceInformationFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
