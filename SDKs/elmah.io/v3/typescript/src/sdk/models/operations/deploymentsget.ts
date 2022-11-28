import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeploymentsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeploymentsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeploymentsGetPathParams;
}


export class DeploymentsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deployment?: shared.Deployment;

  @SpeakeasyMetadata()
  statusCode: number;
}
