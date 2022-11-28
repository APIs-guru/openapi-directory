import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoDatapointsDatapoint } from "./apicoredtodatapointsdatapoint";



export class ApiCoreRequestsDatapointsBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=List", elemType: ApiCoreDtoDatapointsDatapoint })
  list?: ApiCoreDtoDatapointsDatapoint[];
}
