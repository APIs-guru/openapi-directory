import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VehHistory } from "./vehhistory";


export class VehHistoryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.VehHistory })
  data: VehHistory[];

  @Metadata({ data: "json, name=vin" })
  vin: string;
}
