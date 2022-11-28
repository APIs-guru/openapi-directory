import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ContactMethodStatusEnum } from "./contactmethodstatusenum";
/**
 * <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
**/
export declare class ContactMethod extends SpeakeasyBase {
    arn?: string;
    contactEndpoint?: string;
    createdAt?: Date;
    location?: ResourceLocation;
    name?: string;
    protocol?: ContactProtocolEnum;
    resourceType?: ResourceTypeEnum;
    status?: ContactMethodStatusEnum;
    supportCode?: string;
}
