import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
