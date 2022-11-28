import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoEntityUriLong } from "./apicoredtoentityurilong";



export class ApiCoreRequestsDeleteBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: ApiCoreDtoEntityUriLong })
  entities?: ApiCoreDtoEntityUriLong[];
}
