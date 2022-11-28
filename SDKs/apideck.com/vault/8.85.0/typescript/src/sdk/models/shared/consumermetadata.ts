import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConsumerMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_name" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}
