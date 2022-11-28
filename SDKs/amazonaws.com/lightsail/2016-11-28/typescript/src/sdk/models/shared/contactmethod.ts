import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ContactMethodStatusEnum } from "./contactmethodstatusenum";



// ContactMethod
/** 
 * <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
**/
export class ContactMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=contactEndpoint" })
  contactEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: ContactProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ContactMethodStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;
}
