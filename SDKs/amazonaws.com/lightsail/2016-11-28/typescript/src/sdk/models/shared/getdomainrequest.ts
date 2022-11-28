import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;
}
