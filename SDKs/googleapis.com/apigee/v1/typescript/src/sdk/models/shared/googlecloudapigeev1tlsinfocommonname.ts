import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudApigeeV1TlsInfoCommonName extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=wildcardMatch" })
  wildcardMatch?: boolean;
}
