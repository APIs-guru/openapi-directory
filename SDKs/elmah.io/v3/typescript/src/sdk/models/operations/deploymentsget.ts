import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeploymentsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeploymentsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeploymentsGetPathParams;
}


export class DeploymentsGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  deployment?: shared.Deployment;

  @Metadata()
  statusCode: number;
}
