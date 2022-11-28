import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
