import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;
}
