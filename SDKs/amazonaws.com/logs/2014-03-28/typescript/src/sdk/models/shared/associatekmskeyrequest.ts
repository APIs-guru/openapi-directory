import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateKmsKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
