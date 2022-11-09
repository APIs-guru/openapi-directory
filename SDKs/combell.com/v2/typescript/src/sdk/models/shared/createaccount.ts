import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=ftp_password" })
  ftpPassword?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;
}
