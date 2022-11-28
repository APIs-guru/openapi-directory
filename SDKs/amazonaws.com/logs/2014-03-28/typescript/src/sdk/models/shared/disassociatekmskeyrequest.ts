import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateKmsKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;
}
