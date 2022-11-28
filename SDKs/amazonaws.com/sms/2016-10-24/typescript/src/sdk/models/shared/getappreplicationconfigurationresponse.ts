import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerGroupReplicationConfiguration } from "./servergroupreplicationconfiguration";



export class GetAppReplicationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serverGroupReplicationConfigurations", elemType: ServerGroupReplicationConfiguration })
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}
