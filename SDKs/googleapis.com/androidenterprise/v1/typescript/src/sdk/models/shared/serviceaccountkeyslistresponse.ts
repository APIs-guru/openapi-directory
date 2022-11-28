import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountKey } from "./serviceaccountkey";



export class ServiceAccountKeysListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccountKey", elemType: ServiceAccountKey })
  serviceAccountKey?: ServiceAccountKey[];
}
