import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { EndpointRequest } from "./endpointrequest";


export class CreateContainerServiceDeploymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Map<string, Container>;

  @Metadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: EndpointRequest;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
