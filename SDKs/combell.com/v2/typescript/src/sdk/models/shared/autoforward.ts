import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoForward extends SpeakeasyBase {
  @Metadata({ data: "json, name=copy_to_myself" })
  copyToMyself?: boolean;

  @Metadata({ data: "json, name=email_addresses" })
  emailAddresses?: string[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
