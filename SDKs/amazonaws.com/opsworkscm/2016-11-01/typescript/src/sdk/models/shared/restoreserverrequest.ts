import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=KeyPair" })
  keyPair?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
