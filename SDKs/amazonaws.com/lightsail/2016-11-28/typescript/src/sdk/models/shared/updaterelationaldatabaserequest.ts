import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRelationalDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=caCertificateIdentifier" })
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=disableBackupRetention" })
  disableBackupRetention?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableBackupRetention" })
  enableBackupRetention?: boolean;

  @SpeakeasyMetadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=rotateMasterUserPassword" })
  rotateMasterUserPassword?: boolean;
}
