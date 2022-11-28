import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddHostHeaderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;
}
