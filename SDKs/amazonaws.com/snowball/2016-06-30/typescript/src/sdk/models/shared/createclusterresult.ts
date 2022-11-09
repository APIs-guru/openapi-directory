import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateClusterResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;
}
