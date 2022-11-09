import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteKeyPairRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPairName" })
  keyPairName: string;
}
