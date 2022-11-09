import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
