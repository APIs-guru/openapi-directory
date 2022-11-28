import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeploymentsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createDeployment?: shared.CreateDeployment;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createDeployment1?: shared.CreateDeployment;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createDeployment2?: shared.CreateDeployment;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createDeployment3?: shared.CreateDeployment;
}


export class DeploymentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: DeploymentsCreateRequests;
}


export class DeploymentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentResult?: shared.CreateDeploymentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
