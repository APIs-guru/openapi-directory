import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeploymentsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeploymentsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeploymentsDeletePathParams;
}


export class DeploymentsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
