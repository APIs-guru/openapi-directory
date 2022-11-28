import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cpu } from "./cpu";
import { Disk } from "./disk";
import { IdentificationHints } from "./identificationhints";
import { NetworkInterface } from "./networkinterface";
import { Os } from "./os";



// SourceProperties
/** 
 * Source server properties.
**/
export class SourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpus", elemType: Cpu })
  cpus?: Cpu[];

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: Disk })
  disks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=identificationHints" })
  identificationHints?: IdentificationHints;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: Os;

  @SpeakeasyMetadata({ data: "json, name=ramBytes" })
  ramBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=recommendedInstanceType" })
  recommendedInstanceType?: string;
}
