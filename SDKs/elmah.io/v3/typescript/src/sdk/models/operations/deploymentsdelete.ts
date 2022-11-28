import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeploymentsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeploymentsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeploymentsDeletePathParams;
}


export class DeploymentsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
