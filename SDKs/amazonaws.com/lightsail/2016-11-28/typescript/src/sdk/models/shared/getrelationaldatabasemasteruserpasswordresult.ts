import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabaseMasterUserPasswordResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;
}
