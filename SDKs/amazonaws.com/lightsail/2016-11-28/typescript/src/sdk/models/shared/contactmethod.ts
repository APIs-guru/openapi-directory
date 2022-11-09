import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceLocation } from "./resourcelocation";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ContactMethodStatusEnum } from "./contactmethodstatusenum";


// ContactMethod
/** 
 * <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
**/
export class ContactMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=contactEndpoint" })
  contactEndpoint?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: ContactProtocolEnum;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: ContactMethodStatusEnum;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;
}
