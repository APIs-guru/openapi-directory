import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";



export class LaunchProfileInitializationActiveDirectory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computerAttributes", elemType: ActiveDirectoryComputerAttribute })
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  @SpeakeasyMetadata({ data: "json, name=directoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=directoryName" })
  directoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsIpAddresses" })
  dnsIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=organizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponentName" })
  studioComponentName?: string;
}
