import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ftp_password" })
  ftpPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;
}
