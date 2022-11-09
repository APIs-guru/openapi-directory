import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePresignedDomainUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizedUrl" })
  authorizedUrl?: string;
}
