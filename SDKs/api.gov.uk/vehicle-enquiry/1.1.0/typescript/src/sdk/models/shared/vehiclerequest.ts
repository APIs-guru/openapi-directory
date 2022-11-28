import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VehicleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;
}
