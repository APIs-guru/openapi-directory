import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateActivationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultInstanceName" })
  defaultInstanceName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=IamRole" })
  iamRole: string;

  @Metadata({ data: "json, name=RegistrationLimit" })
  registrationLimit?: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
