import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverDnssecConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
