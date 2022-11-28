import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { InterfaceDescriptor } from "./interfacedescriptor";
import { FilterTypeEnum } from "./filtertypeenum";
import { TrafficFilter } from "./trafficfilter";
export declare class TrafficRuleDescriptor extends SpeakeasyBase {
    action: ActionEnum;
    dstInterface?: InterfaceDescriptor[];
    filterType: FilterTypeEnum;
    priority: number;
    trafficFilter: TrafficFilter[];
    trafficRuleId: string;
}
