import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppReplicationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;
}
