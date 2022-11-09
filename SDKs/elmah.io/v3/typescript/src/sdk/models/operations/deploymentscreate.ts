import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeploymentsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createDeployment?: shared.CreateDeployment;

  @Metadata({ data: "request, media_type=application/json" })
  createDeployment1?: shared.CreateDeployment;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createDeployment2?: shared.CreateDeployment;

  @Metadata({ data: "request, media_type=text/json" })
  createDeployment3?: shared.CreateDeployment;
}


export class DeploymentsCreateRequest extends SpeakeasyBase {
  @Metadata()
  request?: DeploymentsCreateRequests;
}


export class DeploymentsCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentResult?: shared.CreateDeploymentResult;

  @Metadata()
  statusCode: number;
}
