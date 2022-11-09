import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApplicationPresignedUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizedUrl" })
  authorizedUrl?: string;
}
