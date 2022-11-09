import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeyPairRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPairName" })
  keyPairName: string;
}
