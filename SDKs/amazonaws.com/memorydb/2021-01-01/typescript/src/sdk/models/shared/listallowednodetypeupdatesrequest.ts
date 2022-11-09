import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllowedNodeTypeUpdatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;
}
