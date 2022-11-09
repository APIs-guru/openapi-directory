import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateKeyContainer
/** 
 * Private key container
**/
export class PrivateKeyContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=privateKey" })
  privateKey: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
