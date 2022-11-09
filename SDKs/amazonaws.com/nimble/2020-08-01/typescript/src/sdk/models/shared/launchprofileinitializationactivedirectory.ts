import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";


export class LaunchProfileInitializationActiveDirectory extends SpeakeasyBase {
  @Metadata({ data: "json, name=computerAttributes", elemType: shared.ActiveDirectoryComputerAttribute })
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  @Metadata({ data: "json, name=directoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=directoryName" })
  directoryName?: string;

  @Metadata({ data: "json, name=dnsIpAddresses" })
  dnsIpAddresses?: string[];

  @Metadata({ data: "json, name=organizationalUnitDistinguishedName" })
  organizationalUnitDistinguishedName?: string;

  @Metadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @Metadata({ data: "json, name=studioComponentName" })
  studioComponentName?: string;
}
