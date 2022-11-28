import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudApigeeV1AsyncQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
