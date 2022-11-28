import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { RegionNameEnum } from "./regionnameenum";



// Region
/** 
 * Describes the AWS Region.
**/
export class Region extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityZones", elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata({ data: "json, name=continentCode" })
  continentCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: RegionNameEnum;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseAvailabilityZones", elemType: AvailabilityZone })
  relationalDatabaseAvailabilityZones?: AvailabilityZone[];
}
