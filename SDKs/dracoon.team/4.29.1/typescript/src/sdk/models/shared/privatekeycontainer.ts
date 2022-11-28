import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateKeyContainerOutput
/** 
 * Private key container
**/
export class PrivateKeyContainerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}


// PrivateKeyContainer
/** 
 * Private key container
**/
export class PrivateKeyContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
