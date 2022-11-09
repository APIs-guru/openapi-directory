import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=cpus", elemType: shared.Cpu })
  cpus?: Cpu[];

  @Metadata({ data: "json, name=disks", elemType: shared.Disk })
  disks?: Disk[];

  @Metadata({ data: "json, name=identificationHints" })
  identificationHints?: IdentificationHints;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: string;

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @Metadata({ data: "json, name=os" })
  os?: Os;

  @Metadata({ data: "json, name=ramBytes" })
  ramBytes?: number;

  @Metadata({ data: "json, name=recommendedInstanceType" })
  recommendedInstanceType?: string;
}
