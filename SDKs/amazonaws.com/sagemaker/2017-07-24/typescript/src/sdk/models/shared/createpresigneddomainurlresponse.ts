import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePresignedDomainUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizedUrl" })
  authorizedUrl?: string;
}
