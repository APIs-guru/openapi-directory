import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateActivationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultInstanceName" })
  defaultInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=IamRole" })
  iamRole: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrationLimit" })
  registrationLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
