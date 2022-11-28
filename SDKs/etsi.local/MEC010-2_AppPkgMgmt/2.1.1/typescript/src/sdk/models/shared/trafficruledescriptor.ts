import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { InterfaceDescriptor } from "./interfacedescriptor";
import { FilterTypeEnum } from "./filtertypeenum";
import { TrafficFilter } from "./trafficfilter";



export class TrafficRuleDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action: ActionEnum;

  @SpeakeasyMetadata({ elemType: InterfaceDescriptor })
  dstInterface?: InterfaceDescriptor[];

  @SpeakeasyMetadata()
  filterType: FilterTypeEnum;

  @SpeakeasyMetadata()
  priority: number;

  @SpeakeasyMetadata({ elemType: TrafficFilter })
  trafficFilter: TrafficFilter[];

  @SpeakeasyMetadata()
  trafficRuleId: string;
}
