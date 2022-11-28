import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTypeEnum } from "./servicetypeenum";



export class GetDimensionKeyDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group: string;

  @SpeakeasyMetadata({ data: "json, name=GroupIdentifier" })
  groupIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedDimensions" })
  requestedDimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServiceType" })
  serviceType: ServiceTypeEnum;
}
