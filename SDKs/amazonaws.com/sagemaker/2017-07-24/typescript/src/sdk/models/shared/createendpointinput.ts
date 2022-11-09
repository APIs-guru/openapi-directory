import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
