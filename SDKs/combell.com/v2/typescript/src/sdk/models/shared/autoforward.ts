import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoForward extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copy_to_myself" })
  copyToMyself?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email_addresses" })
  emailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
