import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransportDependency } from "./transportdependency";



export class ServiceDependency extends SpeakeasyBase {
  @SpeakeasyMetadata()
  requestedPermissions?: string[];

  @SpeakeasyMetadata()
  serCategory?: any;

  @SpeakeasyMetadata()
  serName: string;

  @SpeakeasyMetadata({ elemType: TransportDependency })
  serTransportDependencies?: TransportDependency[];

  @SpeakeasyMetadata()
  version: string;
}
