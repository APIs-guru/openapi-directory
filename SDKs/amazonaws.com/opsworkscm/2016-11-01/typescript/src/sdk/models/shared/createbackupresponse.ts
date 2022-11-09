import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Backup } from "./backup";


export class CreateBackupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Backup" })
  backup?: Backup;
}
