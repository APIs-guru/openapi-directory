import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateKmsKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
