import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseMasterUserPasswordResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=masterUserPassword" })
  masterUserPassword?: string;
}
