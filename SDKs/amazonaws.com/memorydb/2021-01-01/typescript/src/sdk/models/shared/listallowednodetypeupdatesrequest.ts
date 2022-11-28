import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllowedNodeTypeUpdatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;
}
