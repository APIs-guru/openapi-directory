import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// Activation
/** 
 * An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed instance.
**/
export class Activation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationId" })
  activationId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultInstanceName" })
  defaultInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Expired" })
  expired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IamRole" })
  iamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrationLimit" })
  registrationLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=RegistrationsCount" })
  registrationsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
