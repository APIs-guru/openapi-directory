import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VehicleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;
}
