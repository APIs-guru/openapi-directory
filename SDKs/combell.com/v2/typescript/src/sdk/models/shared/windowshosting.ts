import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WindowsHosting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=servicepack_id" })
  servicepackId?: number;
}
