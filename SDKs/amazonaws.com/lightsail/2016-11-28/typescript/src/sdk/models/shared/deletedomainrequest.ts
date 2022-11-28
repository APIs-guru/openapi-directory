import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;
}
