import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTypeEnum } from "./servicetypeenum";


export class GetDimensionKeyDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Group" })
  group: string;

  @Metadata({ data: "json, name=GroupIdentifier" })
  groupIdentifier: string;

  @Metadata({ data: "json, name=Identifier" })
  identifier: string;

  @Metadata({ data: "json, name=RequestedDimensions" })
  requestedDimensions?: string[];

  @Metadata({ data: "json, name=ServiceType" })
  serviceType: ServiceTypeEnum;
}
