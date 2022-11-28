import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupId" })
  backupId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyPair" })
  keyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
