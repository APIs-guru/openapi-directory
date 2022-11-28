import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterEndpoint } from "./dbclusterendpoint";



export class DbClusterEndpointMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterEndpoint })
  dbClusterEndpoints?: DbClusterEndpoint[];

  @SpeakeasyMetadata()
  marker?: string;
}
