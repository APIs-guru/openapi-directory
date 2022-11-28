import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreRequestsPatchBody } from "./apicorerequestspatchbody";



export class ApiCoreRequestsPatchBodyBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PatchRequests", elemType: ApiCoreRequestsPatchBody })
  patchRequests?: ApiCoreRequestsPatchBody[];
}
