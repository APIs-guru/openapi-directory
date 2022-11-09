import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResolverDnssecConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
