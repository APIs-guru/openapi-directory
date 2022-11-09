import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
