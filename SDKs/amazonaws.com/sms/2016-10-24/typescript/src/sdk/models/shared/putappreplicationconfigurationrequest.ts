import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerGroupReplicationConfiguration } from "./servergroupreplicationconfiguration";


export class PutAppReplicationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=serverGroupReplicationConfigurations", elemType: shared.ServerGroupReplicationConfiguration })
  serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}
