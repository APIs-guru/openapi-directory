import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AvailabilityZone } from "./availabilityzone";
import { RegionNameEnum } from "./regionnameenum";
import { AvailabilityZone } from "./availabilityzone";


// Region
/** 
 * Describes the AWS Region.
**/
export class Region extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityZones", elemType: shared.AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @Metadata({ data: "json, name=continentCode" })
  continentCode?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: RegionNameEnum;

  @Metadata({ data: "json, name=relationalDatabaseAvailabilityZones", elemType: shared.AvailabilityZone })
  relationalDatabaseAvailabilityZones?: AvailabilityZone[];
}
