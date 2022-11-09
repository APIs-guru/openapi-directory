import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudApigeeV1SyncAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=identities" })
  identities?: string[];
}
