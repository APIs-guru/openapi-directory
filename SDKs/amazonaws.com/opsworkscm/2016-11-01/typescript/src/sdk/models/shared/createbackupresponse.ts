import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";



export class CreateBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Backup" })
  backup?: Backup;
}
