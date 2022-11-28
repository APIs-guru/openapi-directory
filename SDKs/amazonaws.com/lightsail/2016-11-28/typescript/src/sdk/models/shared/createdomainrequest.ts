import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
