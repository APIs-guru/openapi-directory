import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicKeyContainer
/** 
 * Public key container
**/
export class PublicKeyContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}


// PublicKeyContainerOutput
/** 
 * Public key container
**/
export class PublicKeyContainerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
