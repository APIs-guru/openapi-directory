import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConsumerMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_name" })
  accountName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=user_name" })
  userName?: string;
}
