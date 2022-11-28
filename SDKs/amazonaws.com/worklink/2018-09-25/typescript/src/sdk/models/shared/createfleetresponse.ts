import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;
}
