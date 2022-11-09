import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateKeyPairRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPairName" })
  keyPairName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
