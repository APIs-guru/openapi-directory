import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VehHistory } from "./vehhistory";



export class VehHistoryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: VehHistory })
  data: VehHistory[];

  @SpeakeasyMetadata({ data: "json, name=vin" })
  vin: string;
}
