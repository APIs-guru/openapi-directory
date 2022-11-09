import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateFleetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;
}
