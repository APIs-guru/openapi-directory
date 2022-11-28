import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOffering } from "./reserveddbinstancesoffering";



export class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstancesOffering })
  reservedDbInstancesOfferings?: ReservedDbInstancesOffering[];
}
