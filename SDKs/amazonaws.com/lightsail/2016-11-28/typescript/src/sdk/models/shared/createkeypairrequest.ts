import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
