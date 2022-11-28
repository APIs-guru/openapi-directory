import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerGroupReplicationConfiguration } from "./servergroupreplicationconfiguration";



export class PutAppReplicationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverGroupReplicationConfigurations", elemType: ServerGroupReplicationConfiguration })
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}
