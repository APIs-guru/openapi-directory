import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// Activation
/** 
 * An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed instance.
**/
export class Activation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationId" })
  activationId?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DefaultInstanceName" })
  defaultInstanceName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=Expired" })
  expired?: boolean;

  @Metadata({ data: "json, name=IamRole" })
  iamRole?: string;

  @Metadata({ data: "json, name=RegistrationLimit" })
  registrationLimit?: number;

  @Metadata({ data: "json, name=RegistrationsCount" })
  registrationsCount?: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
