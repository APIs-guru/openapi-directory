import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyImmediately" })
  applyImmediately?: boolean;

  @Metadata({ data: "json, name=caCertificateIdentifier" })
  caCertificateIdentifier?: string;

  @Metadata({ data: "json, name=disableBackupRetention" })
  disableBackupRetention?: boolean;

  @Metadata({ data: "json, name=enableBackupRetention" })
  enableBackupRetention?: boolean;

  @Metadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "json, name=preferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=preferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @Metadata({ data: "json, name=rotateMasterUserPassword" })
  rotateMasterUserPassword?: boolean;
}
