import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApplicationPresignedUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizedUrl" })
  authorizedUrl?: string;
}
