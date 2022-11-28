import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivationStatusEnum } from "./activationstatusenum";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";



export class GetContactChannelResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationStatus" })
  activationStatus?: ActivationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=ContactChannelArn" })
  contactChannelArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress: ContactChannelAddress;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ChannelTypeEnum;
}
