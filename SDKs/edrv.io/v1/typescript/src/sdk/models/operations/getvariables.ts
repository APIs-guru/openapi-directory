import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVariablesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVariablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariablesPathParams;
}


export class GetVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
