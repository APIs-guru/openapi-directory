import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformationStringFilter } from "./instanceinformationstringfilter";
import { InstanceInformationFilter } from "./instanceinformationfilter";
export declare class DescribeInstanceInformationRequest extends SpeakeasyBase {
    filters?: InstanceInformationStringFilter[];
    instanceInformationFilterList?: InstanceInformationFilter[];
    maxResults?: number;
    nextToken?: string;
}
