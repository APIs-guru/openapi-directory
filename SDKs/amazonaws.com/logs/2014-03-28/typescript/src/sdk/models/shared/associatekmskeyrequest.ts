import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateKmsKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
