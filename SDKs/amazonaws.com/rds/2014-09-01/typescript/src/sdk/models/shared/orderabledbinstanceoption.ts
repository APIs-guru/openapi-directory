import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



export class OrderableDbInstanceOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  multiAzCapable?: boolean;

  @SpeakeasyMetadata()
  readReplicaCapable?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  supportsIops?: boolean;

  @SpeakeasyMetadata()
  vpc?: boolean;
}
