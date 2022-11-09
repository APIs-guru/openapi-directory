import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceAccountKey } from "./serviceaccountkey";


export class ServiceAccountKeysListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccountKey", elemType: shared.ServiceAccountKey })
  serviceAccountKey?: ServiceAccountKey[];
}
