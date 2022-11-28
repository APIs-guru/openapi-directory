import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstance } from "./reserveddbinstance";



export class ReservedDbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstance })
  reservedDbInstances?: ReservedDbInstance[];
}
