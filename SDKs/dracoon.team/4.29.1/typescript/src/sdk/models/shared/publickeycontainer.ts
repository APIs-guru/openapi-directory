import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicKeyContainer
/** 
 * Public key container
**/
export class PublicKeyContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=publicKey" })
  publicKey: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
