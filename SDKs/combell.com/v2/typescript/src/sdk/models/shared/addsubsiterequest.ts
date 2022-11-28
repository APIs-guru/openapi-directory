import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddSubsiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
